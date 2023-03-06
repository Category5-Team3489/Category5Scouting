import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


import { ReactSketchCanvas } from "react-sketch-canvas";
import { SyncedNumberSelect } from './SyncedNumberSelect';

export const MatchScouting = () => {
  const ranks = [
      {name: "0", value: 0},
      {name: "1", value: 1},
      {name: "2", value: 2},
      {name: "3", value: 3},
      {name: "4", value: 4},
      {name: "5", value: 5},
  ];

  return (
    <Alert variant="success">
      <Alert.Heading>
        Match Scouting
      </Alert.Heading>
      <Container fluid>
        {/* Auto */}
        <Alert.Heading>
          Auto
          <br />
          ---------------------------------
        </Alert.Heading>
        {/* Auto Part 1*/}
        <Row>
          {/* Auto Grippiness */}
          <Col>
            <Form>
              <Form.Label>
                <b>Auto Grippiness</b>
              </Form.Label>

              <Form.Text>
                <br />
                  • How well does the gripper withstand being jostled?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Gripper Grippiness?" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedNumberSelect />
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Label>
                <b>Auto Grippiness</b>
              </Form.Label>

              <Form.Text>
                <br />
                  • How well does the gripper withstand being jostled?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Gripper Grippiness?" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedNumberSelect />
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Label>
                <b>Auto Grippiness</b>
              </Form.Label>

              <Form.Text>
                <br />
                  • How well does the gripper withstand being jostled?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Gripper Grippiness?" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedNumberSelect />
            </Form>
          </Col>
        </Row>
        {/* Auto Part 2 */}
      </Container>
    </Alert>
  );
};