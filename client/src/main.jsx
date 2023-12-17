import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavScroll from "./components/nav/NavScroll.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavScroll />
    <App />
  </React.StrictMode>
);
