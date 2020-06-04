import React from 'react';
import './Menubar.scss';
import { Navbar, Nav, Container, Image  } from "react-bootstrap";

const Menubar = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg" className="menu-bar">
                <Container>
                    <Navbar.Brand href="#"><Image src="https://i.ibb.co/SQFM3M8/logo.png" alt="air-cnc" title="air-cnc-logo" className="w-25" fluid /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="menu-item" href="#">Host your home</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Host your experience</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Help</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Log in</Nav.Link>
                            <Nav.Link className="menu-item sign-up gradient-button" href="#">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;