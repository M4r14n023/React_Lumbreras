import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">LauXpress</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              Home
            </Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              
            >
              <NavDropdown.Item>
                <Link to="/category/smartphones">SmartPhones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/laptops">Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/fragrances">Fragrances</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
