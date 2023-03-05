import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


import { ReactSketchCanvas } from "react-sketch-canvas";
import { SyncedEmojiSelect as SyncedEmojiSelect } from './SyncedEmojiSelect';

const textStyles = {
  color: "black"
}

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
                <br />
                <b>Auto Grippiness</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • How well does the gripper withstand starting/stopping quickly?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Auto Grippiness" />
            </Form>
          </Col>
          <Col>
          {/* Auto Placement */}
            <Form>
               <Form.Label>
                <br />
                <b>Auto Placement</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • How well does the robot line up on the node?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Auto Placement" />
            </Form>
          </Col>
          </Row>
          <br />
          <Row>
          <Col></Col>
          <Col>
            <Form>
              <Form.Label>
                <br />
                <br />
                <b>Auto Navigability (How well they move around during auto)</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • Does the robot stay on track well?
                <br />
                  • Do they run into many things?
                <br />
                  •Do they accomplish the tasks they wanted to accomplish?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Auto Navigability" />
            </Form>
          </Col>
          <Col></Col>
          </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container fluid>
        <Alert.Heading>
          Teleop
          <br />
          ---------------------------------
          <br />
        </Alert.Heading>
        <Row>
          <Col>
          <Form>
               <Form.Label>
                <br />
                <b>Game Piece Grippiness</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • How well does the gripper withstand being jostled?
                <br />
                  • How well does the robot traverse the field with a game piece?
                <br />
                  • Any other observations about the gripper's grippiness?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Game Piece Grippiness" />
              <br />
              <br />
            </Form>
          </Col>
          <Col>
            <Form>
               <Form.Label>
                <br />
                <b>Game Piece Placement</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • How well does the robot line up on the node?
                <br />
                  • How well does the robot place the game piece?
                <br />
                  • How consistent overall is it?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Game Piece Placement" />
              <br />
              <br />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
               <Form.Label>
                <br />
                <b>Elusive Driving</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • Do they avoid opposing defense well?
                <br />
                  • Are they sufficiently aware of their surroundings, bracing for opposing defense?
                <br />
                  • Do they use the opponents to their advantage, either drawing penalties or scoring in spite of them?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Elusive Driving" />
              <br />
              <br />
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Label>
                <br />
                <b>Defensive Driving (Defending Other Teams)</b>
              </Form.Label>

              <Form.Text style={textStyles}>
              <br />
                  • Do they avoid opposing defense well?
                <br />
                  • Are they sufficiently aware of their surroundings, bracing for opposing defense?
                <br />
                  • Do they use the opponents to their advantage, either drawing penalties or scoring in spite of them?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Defensive Driving" />
              <br />
              <br />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
               <Form.Label>
                <br />
                <b>Drive Team Communication/Coordination</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • Does their drive team get along with other drive teams? Do they seem bossy and rude (or timid and unassuming)?
                <br />
                  • Does their drive team seem to have one personality that dominates conversation on/off the field (possibly an adult mentor?)
                <br />
                  • Does the drive team appear to get along with each other? Do they seem coordinated and efficient?
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Drive Team Communication/Coordination" />
              <br />
              <br />
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Label>
                <br />
                <b>Charge Station Parking (and balancing)</b>
              </Form.Label>

              <Form.Text style={textStyles}>
                <br />
                  • Do they leave space for other robots when parking?
                <br />
                <br />
                  • Do they leave space for other robots when parking?
                <br />
                <br />
                  • Do they consistently park in the community for points?
                <br />
                <br />
                <div className="mt-2" />
                <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
              </Form.Text>
              <br />
              <SyncedEmojiSelect name="Charge Station Parking" />
              <br />
              <br />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              <br />
              <b>Additional Notes:</b>
            </Form.Label>

            <Form.Text style={textStyles}>
              <br />
              <p>Add anything that you feel may be important for Van or the Drive Team. <i>This is very important!</i></p>
              <Form.Control placeholder="Your observations" as="textarea" rows={3} />
            </Form.Text>
          </Col>
        </Row>
      </Container>
    </Alert>
  );
};