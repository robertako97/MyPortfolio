import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">ROBERTO DIAZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Resume</Nav.Link>
            <NavDropdown title="GitHub" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://github.com/robertako97/OpenAI_Test">
                My AI Project
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/Book-Search-Engine">
                GraphQL Implementation
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/NoSQL_Backend">
                MongoDB Backend
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/E-Commerce-Server">
                MySQL Backend
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/Employee-DB">
                MySQL NodeJS
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/text-editor">
                A Text Editor to practice WebPack App
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/robertako97?tab=repositories">
                My repositories (Yes! I need more projects)
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/robertako97/No-Time-4a-README">
                By any chance you need a README gen?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.linkedin.com/in/roberto-d%C3%ADaz-gallegos-855b581a0/">
              LinkedIn
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search in Open AI? TBD"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Open AI?</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
