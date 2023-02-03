import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export const TeamSheets = () => {
  return (
    <Container fluid className="p-4">
      <Alert variant="danger">
        <Alert.Heading>
          Team Sheets
        </Alert.Heading>
        Please select the team you would like to scout
        <Form.Select aria-label="Team selection">
          <option key="" value="">Select team</option>
          <option value="1">3489: Category 5</option>
          <option value="2">342: The Burning Magnetos</option>
          <option value="3">4020: Cyber Tribe</option>
        </Form.Select>
        <br />
        <Alert.Heading>
          Team 3489: Category 5
          Summerville SC
        </Alert.Heading>
      </Alert>
    </Container>
  );
};