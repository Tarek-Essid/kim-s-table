import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/user';
import Button from 'react-bootstrap/Button';
import kimslogo from '../assets/kimslogo.png';
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="my-navbar">
      <Navbar bg="" data-bs-theme="">
        <Container className="my-container">
          <Navbar.Brand href="/">
            <img src={kimslogo} alt="img" width={80} height={80} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">profile</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
            <Nav.Link href="/Add-product">Add Food</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/Login">Log in</Nav.Link>
            <Nav.Link href="/uploads">uploads</Nav.Link>

            <Button
              href="/Login"
              className="Logout"
              variant="secondary"
              type="button"
              name="logout"
              onClick={handleLogout}>
              Log out
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
