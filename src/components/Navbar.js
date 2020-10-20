import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
    const navStyle={
        color:"tan",
    }
    return (
        <Router>
            <MDBNavbar style={{backgroundColor:"#1f2421"}} expand="md">
                <MDBNavbarBrand>
                    <a className="navbar-brand" href="/home"> <strong className="text" style={navStyle}>Sushma Reddy Kaluva</strong></a>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to="/home" onClick={() => {window.location.href="/home"}} style={navStyle}><b>Home</b></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/projects" onClick={() => {window.location.href="/projects"}} style={navStyle}><b>Projects</b></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/resume" onClick={() => {window.location.href="/resume"}} style={navStyle}><b>Resume</b></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/contact" onClick={() => {window.location.href="/contact"}} style={navStyle}><b>Contact</b></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Router>
    );

}

export default Navbar;