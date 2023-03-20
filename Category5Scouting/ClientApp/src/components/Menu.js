import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load", function() { changeBackground("gray") });

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
              <LinkContainer to="/team-sheets">
                <Nav.Link>Team Sheets</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/playoffs">
                <Nav.Link>Playoffs</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/rankings">
                <Nav.Link>Rankings</Nav.Link>
              </LinkContainer> */}

              {/* <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer> */}

              <NavDropdown title="Other" id="basic-nav-dropdown" menuVariant="dark">
                <LinkContainer to="/useful-links">
                  <NavDropdown.Item>Useful Links</NavDropdown.Item>
                </LinkContainer>

                {/* <LinkContainer to="/weather-forecast">
                  <NavDropdown.Item>Weather forecast</NavDropdown.Item>
                </LinkContainer> */}

                {/* <LinkContainer to="/clicker">
                  <NavDropdown.Item>Clicker</NavDropdown.Item>
                </LinkContainer> */}
              </NavDropdown>
            </Nav>
            
            {/* <Nav>
              <LinkContainer to="/settings">
                <Nav.Link>Settings</Nav.Link>
              </LinkContainer>
            </Nav> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};