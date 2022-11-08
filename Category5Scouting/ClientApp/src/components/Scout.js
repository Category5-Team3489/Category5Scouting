import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Scout = () => {

  return (
    <Container fluid className="p-4">
      <Row>
      <Col sm={8}>
          <Alert variant="dark">
            <Alert.Heading>Questions</Alert.Heading>
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert variant="dark">
            <Alert.Heading>Teams</Alert.Heading>
            <Alert variant="primary">
              1
            </Alert>
            <Alert variant="primary">
              2
            </Alert>
            <Alert variant="primary">
              3
            </Alert>
            <Alert variant="danger">
              1
            </Alert>
            <Alert variant="danger">
              2
            </Alert>
            <Alert variant="danger">
              3
            </Alert>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};