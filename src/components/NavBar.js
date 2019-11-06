import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/navBar.css'
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return(
        <div className="fixed-top">
            <Navbar bg="dark" variant='dark' expand="md">
                <Navbar.Brand >MengeBeats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link
                            to="section-one-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration= {300}
                        >
                            <Nav.Link >Home</Nav.Link>
                        </Link>
                        <Link
                            to="section-two-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration= {300}
                        >
                            <Nav.Link>Store</Nav.Link>
                        </Link>
                        <Link
                            to="section-three-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-300}
                            duration= {300}
                        >
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;