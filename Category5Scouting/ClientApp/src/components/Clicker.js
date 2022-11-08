import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useSound from 'use-sound';

import clickSfx from '../sounds/click.wav';

export const Clicker = () => {
  const [clickSound] = useSound(clickSfx);

  let click = () => {
    clickSound();
  }

  return (
    <Container fluid className="p-4">
      <Row>
        <Col sm={8}>
          <Alert variant="dark">
            <Alert.Heading>Clicker</Alert.Heading>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg" onClick={click}>
                🍪
              </Button>
              <InputGroup className="mb-3" size="lg">
                <Form.Control aria-label="Cookies" readOnly/>
              </InputGroup>
            </div>
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert variant="dark">
            <Alert.Heading>Leaderboard</Alert.Heading>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};