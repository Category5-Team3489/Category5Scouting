import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, NavDropdown } from 'react-bootstrap';

export function Menu() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            <LinkContainer to="/scout">
              <Nav.Link>Stand</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/scout">
              <Nav.Link>Pit</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/rankings">
              <Nav.Link>Rankings</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Development" id="basic-nav-dropdown" menuVariant="dark">
              <LinkContainer to="/useful-links">
                <NavDropdown.Item>Useful Links</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/weather-forecast">
                <NavDropdown.Item>Weather forecast</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/clicker">
                <NavDropdown.Item>Clicker</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/scout">
                <NavDropdown.Item>Scout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <LinkContainer to="/settings">
              <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};