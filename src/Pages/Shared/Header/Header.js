import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
       <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="white">
  <Container>
  <Navbar.Brand href="#home">TOY HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Manage Items</Nav.Link>
      <Nav.Link href="#deets">Add items</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        My Items
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Blogs
      </Nav.Link>
      
    </Nav>
    <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </>
    );
};

export default Header;