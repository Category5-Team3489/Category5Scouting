import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import clickSfx from '../../sounds/click.wav';

export const Clicker = ( {state} ) => {
  // Hook for click sound
  const [playClickSound] = useSound(clickSfx);

  // Hook for cookie count
  const [cookies, setCookies] = useState(0);

  // Hook for leaderboard
  const [leaderboard, setLeaderboard] = useState([]);

  // Loads the leaderboard
  let loadLeaderboard = () => {
    // Execute the api request and load the leaderboard that the request returns
    fetch("/api/clicker/leaderboard")
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }

  // Load the leaderboard on start
  useEffect(() => {
    loadLeaderboard();
  }, []);

  useEffect(() => {
    // Reload leaderboard every 1000ms (1 second)
    const interval = setInterval(() => {
      loadLeaderboard();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hook to get a scouter's cookie count on start with the given scouter id
  useEffect(() => {
    // Execute the api request and load the cookie count that the request returns
    fetch("api/clicker/cookies?id=" + encodeURIComponent(state.scouterIdState.get()))
      .then(response => response.json())
      .then(data => setCookies(data));
  }, [state.scouterIdState]);

  // Handles the cookie click
  let clickCookie = (e) => {
    // Only allows clicks that came from a mouse or a touch, not holding enter
    if (e.nativeEvent.pointerType !== "mouse" && e.nativeEvent.pointerType !== "touch") {
      return;
    }
    // Plays the click sound
    playClickSound();
    // Execute the api request and load the cookie count that the request returns
    fetch("api/clicker/clicked?id=" + encodeURIComponent(state.scouterIdState.get()))
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
              {/* When button is pressed handle the cookie click */}
              <Button variant="secondary" size="lg" onClick={(e) => clickCookie(e)}>
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
                // Map the leaderboard data to visuals
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