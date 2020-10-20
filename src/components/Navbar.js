import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function Navbar() {



    return (
        <Router>
            <MDBNavbar color="black" light expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Sushma Reddy Kaluva</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Projects</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Resume</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Contact</MDBNavLink>
                        </MDBNavItem>


                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Router>
    );

}

export default Navbar;