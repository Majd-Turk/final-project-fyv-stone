import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>FYV STONE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="products">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/opinion" className="opinion">
                Opinion
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart" className="cart">
                Cart
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="contact">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className="login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
