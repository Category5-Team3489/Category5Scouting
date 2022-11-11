import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ScouterSelection } from './ScouterSelection';

export function Settings( {state} ) {
  // Shuts down the server
  let shutdown = () => {
    fetch('api/end');
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
            <Button variant="danger" id="shutdown" onClick={shutdown}>
              ⚠️Shutdown⚠️
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};