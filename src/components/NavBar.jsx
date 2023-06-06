import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">LauXpress</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/products">Productos</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contactanos</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartWidget />
    </>
  );
}

export default NavBar