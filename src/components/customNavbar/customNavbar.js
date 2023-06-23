import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png";

class CustomNavbar extends Component{
  render(){
    return(
	    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
			<Container>
			<Navbar.Brand href="/">
				<img className="navbar-logo" src={logo} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
				<Nav.Link href={`/resume`}>Resume</Nav.Link>
				<Nav.Link href={`/portfolio`}>Portfolio</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
    );
  }
}

export default CustomNavbar;