import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/navBar.css'
import { Link } from "react-scroll";
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
                        <Link
                            className="nav-link"
                            style={{pointerEvents: 'visibleFill'}}
                            to="section-one-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration= {500}
                            onClick={()=>{if(width < 998){setOpen(!open)}}}
                        >
                            Home
                        </Link>
                        <div style={{position: 'relative'}}>
                            <Link
                                className="nav-link"
                                style={{zIndex: '10'}}
                                to="section-two-wrapper"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration= {500}
                                onClick={()=>{if(width < 998){setOpen(!open)}}}
                            >
                                Store
                            </Link>
                        </div>
                        <Link
                            className="nav-link"
                            to="section-three-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-300}
                            duration= {500}
                            onClick={()=>{if(width < 998){setOpen(!open)}}}
                        >
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;