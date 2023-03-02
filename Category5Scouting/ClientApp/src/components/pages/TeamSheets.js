import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import { PitScouting } from '../elements/PitScouting';
import { MatchScouting } from '../elements/MatchScouting';
import { TeamSelector } from '../elements/TeamSelector';

export const TeamSheets = () => {
  return (
    <Container fluid className="p-4">
      <TeamSelector />
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
    </Container>
  );
};
