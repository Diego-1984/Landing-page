import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar=()=> {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="container d-flex justify-content-end">
                        <Nav>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Services</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default MyNavbar;