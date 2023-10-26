import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand-navbar"><img src="../../../src/cart.svg" alt="" width="50px" height="50px" className="brand-logo"/>TuTienda Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home" className="link-navbar">Inicio</Nav.Link>
                        <Nav.Link href="#link" className="link-navbar">Hogar & Deco</Nav.Link>
                        <Nav.Link href="#link" className="link-navbar">Moda</Nav.Link>
                        <Nav.Link href="#link" className="link-navbar">Tecnologia</Nav.Link>
                        <Nav.Link href="#link" className="link-navbar">Herramientas</Nav.Link>
                        <Nav.Link href="#link" className="link-navbar">Belleza</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
}

export default NavBar;
