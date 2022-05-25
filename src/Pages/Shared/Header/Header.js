import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
       <>
      <Navbar collapseOnSelect expand="lg" sticky='top' className='navbar'>
  <Container className='nav rounded'>
  <Navbar.Brand as={Link} to='/' className='fw-bold header-title '>TOY HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      
      <Nav.Link as={Link} to='blogs'>
        Blogs
      </Nav.Link>
      {
        user && <>
              <Nav.Link as={Link} to='/manageitems'>Manage Items</Nav.Link>
      <Nav.Link as={Link} to='/add'>Add items</Nav.Link>
      <Nav.Link as={Link} to='/myitems'>
        My Items
      </Nav.Link>
          </>
      }
      <Nav.Link >
          Contact
        </Nav.Link>
    </Nav>
    <Nav>
      
                            
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Log out</button>
                                :
                                
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </>
    );
};

export default Header;