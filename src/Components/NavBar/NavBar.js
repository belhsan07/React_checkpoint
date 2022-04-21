import React from "react";
import Navbar from "react-bootstrap/Navbar";
import{Nav} from 'react-bootstrap'

function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
    </div>
  );
}

export default NavBar;