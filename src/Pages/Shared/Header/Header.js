import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <>
      <Navbar collapseOnSelect expand="lg" sticky='top' className='navbar'>
  <Container className='nav rounded'>
  <Navbar.Brand as={Link} to='/' className='fw-bold header-title '>TOY HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link href="#pricing">Manage Items</Nav.Link>
      <Nav.Link href="#deets">Add items</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        My Items
      </Nav.Link>
      <Nav.Link as={Link} to='blogs'>
        Blogs
      </Nav.Link>
      
    </Nav>
    <Nav.Link as={Link} to='login' >
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