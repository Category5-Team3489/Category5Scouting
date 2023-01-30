import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const StandScouting = () => {
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
              Blue 1
            </Alert>
            <Alert variant="primary">
              Blue 2
            </Alert>
            <Alert variant="primary">
              Blue 3
            </Alert>
            <Alert variant="danger">
              Red 1
            </Alert>
            <Alert variant="danger">
              Red 2
            </Alert>
            <Alert variant="danger">
              Red 3
            </Alert>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};