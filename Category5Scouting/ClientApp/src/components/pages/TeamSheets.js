import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import { PitScouting } from '../elements/PitScouting';
import {MatchScouting} from '../elements/MatchScouting';
import {DNP} from '../elements/DNP';
import { Dashboard } from './Dashboard';

export const TeamSheets = () => {
  return (
    <Container fluid className="p-4">
      <Alert variant="dark">
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
      </Alert>
      <br />
      <br />
      <Alert variant="danger">
        <Alert.Heading>
          Team 3489: Category 5 <br />
          Summerville, SC, USA
        </Alert.Heading>

        <Accordion>
          <Accordion.Item>
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Overview of team" as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Alert>
      <br />
      <br />
      <PitScouting />
      <br />
      <br />
      <MatchScouting />
      <DNP />
    </Container>
  );
};
