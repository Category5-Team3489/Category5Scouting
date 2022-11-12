import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useSound from 'use-sound';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import clickSfx from '../sounds/click.wav';

export const Clicker = ( {state} ) => {
  // Hook for click sound
  const [clickSound] = useSound(clickSfx);

  // Hook for cookie count
  const [cookies, setCookies] = useState(0);

  // Hook for leaderboard
  const [leaderboard, setLeaderboard] = useState([]);

  let loadLeaderboard = () => {
    fetch('/api/cookie-leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }

  useEffect(() => {
    loadLeaderboard();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      loadLeaderboard();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hook to get cookie count on load
  useEffect(() => {
    fetch('api/get-cookies?id=' + encodeURIComponent(state.scouterIdState.get()))
      .then(response => response.json())
      .then(data => setCookies(data));
  }, []);

  // runs when cookie button is clicked
  // returns if wasnt clicked by a mouse, ie: hover and holding enter
  // plays the click sound
  // adds 1 cookie to the cookie count
  let click = (e) => {
    if (e.nativeEvent.pointerType !== "mouse") {
      return;
    }
    clickSound();
    fetch('api/clicked-cookie?id=' + encodeURIComponent(state.scouterIdState.get()))
      .then(response => response.json())
      .then(data => setCookies(data));
  }

  return (
    <Container fluid className="p-4">
      <Row>
        <Col sm={8}>
          <Alert variant="dark">
            <Alert.Heading>Clicker</Alert.Heading>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg" onClick={(e) => click(e)}>
                🍪
              </Button>
              <InputGroup size="lg">
                <InputGroup.Text>
                  Cookies
                </InputGroup.Text>
                <Form.Control aria-label="Cookie count" readOnly value={cookies}/>
              </InputGroup>
            </div>
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert variant="dark">
            <Alert.Heading>Leaderboard</Alert.Heading>
            <ListGroup as="ol" numbered>
              {
                leaderboard.map((item, index) => {
                  return (
                    <ListGroup.Item key={index} as="li"
                    className="d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.name}</div>
                        Cookies: {item.cookies}
                      </div>
                      <Badge bg="primary" pill>
                        Prestige 0
                      </Badge>
                    </ListGroup.Item>
                  );
                })
              }
            </ListGroup>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};