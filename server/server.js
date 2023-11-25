const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers.js");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }),
}); //Schema not defined yet

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Log incoming GraphQL requests
  app.use("/graphql", (req, res, next) => {
    console.log(
      `Received GraphQL request at ${new Date().toISOString()}: ${JSON.stringify(
        req.body
      )}`
    );
    next();
  });
  //GraphQL requests are now handled by the Apollo Server instance
  /////////////////////////////////
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );
  //ENVIRONMENTAL VARIABLES
  /////////////////////////////////
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // CONNECTION
  /////////////////////////////////
  db.once("open", () => {
    console.log("MongoDB connection opened successfully!");

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
};

startApolloServer();
