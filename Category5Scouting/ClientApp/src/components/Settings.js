import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { ScouterSelection } from './ScouterSelection';

export function Settings( {state} ) {
  // Stops the server
  let stop = () => {
    // Execute the api request
    fetch("api/stop");
  }

  return (
    <Container fluid className="p-4">
      <Row>
        <Col sm={8}>
          <ScouterSelection
          scouterIdState={state.scouterIdState}
          scouterNameState={state.scouterNameState}/>
        </Col>
        <Col sm={4}>
          <Alert variant="dark">
            <Alert.Heading>Other</Alert.Heading>
            {/* When button is pressed shutdown server */}
            <Button variant="danger" id="shutdown" onClick={stop}>
              ⚠️Stop server⚠️
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};