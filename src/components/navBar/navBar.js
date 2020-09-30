import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar'
import { Navbar,Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


class Navbars extends Component {

  render() {
    return (
      <Navbar bg="info" expand="sm">
      <Navbar.Brand href="/home">StudyPup</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="mr-auto">
          <Nav.Link className="navbar-brand-custom"  href="/home">Home</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/premium">PREMIUM</Nav.Link>
          
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="/questions">FAQs</NavDropdown.Item>
            <NavDropdown.Item href="/about">About StudyPup</NavDropdown.Item>
            <NavDropdown.Divider />
    
          </NavDropdown>
          
        </Nav>
        <Nav.Link className="ml-auto" href="/login">Login</Nav.Link>
        
        <Form inline>
         
        </Form>
      </Navbar.Collapse>
    </Navbar>
      
    );
  
  // ...
}  
}

export default Navbars ;