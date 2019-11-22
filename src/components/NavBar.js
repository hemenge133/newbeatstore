import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/navBar.css'

import useWindowDimensions from "../useWindowDimensions";

const NavBar = () => {
    const {width} = useWindowDimensions();
    const [open, setOpen] = React.useState(false);

    return(
        <div className="fixed-top" style={{width: width }}>
            <Navbar  bg="dark" variant='dark' expand="lg">
                <Navbar.Brand className="logo">MengeBeats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{if(width < 998){setOpen(!open)}}}/>
                <Navbar.Collapse id="basic-navbar-nav" in={open}>
                    <Nav className="mr-auto">
                        <Nav.Link
                            className="nav-link"
                            style={{pointerEvents: 'visibleFill'}}
                            href="/home"
                            onClick={()=>{if(width < 998){setOpen(!open)}}}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="/Contact"
                            onClick={()=>{if(width < 998){setOpen(!open)}}}
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="/beats"
                            onClick={()=>{if(width < 998){setOpen(!open)}}}
                        >
                            Beats
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;