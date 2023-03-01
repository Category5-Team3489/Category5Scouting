import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  // width: '62%',
};
const textStyles = {
  color: "black"
}

export const PitScouting = () => {
  return (
    <Alert variant="primary">
      <Alert.Heading>
        Pit Scouting
      </Alert.Heading>
<br />
      {/* https://github.com/vinothpandian/react-sketch-canvas */}
     <Container fluid>
      <ReactSketchCanvas
        backgroundImage="https://i.imgur.com/7IqCvi0.png"
        style={styles}
        // width="100%"
        height="320px"
        preserveBackgroundImageAspectRatio="xMidYMid meet"
        strokeWidth={4}
        strokeColor="red"
      />
      </Container>
      <br />

      {/* BEST THINGS */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <b>What are the best things about their robot?</b>
          </Form.Label>
          <Form.Control placeholder="Best things" as="textarea" rows={2} />
        </Form.Group>
      </Form>
      <br />
      {/* GRIPPER? */}
      <Form>
        <Form.Label>
          <b>Gripper?</b>
        </Form.Label>
        <Form.Control placeholder="What type of gripper? Describe the design" as="textarea" rows={2} />
      </Form>
      <br />
      <Form>
        <Form.Label>
          <b>Arm Design?</b>
        </Form.Label>
        {/* <Form.Check label="NO ARM" name="group1" type="radio" />
        <Form.Check label="" name="group1" type="radio" />
        <Form.Check label="Other?" name="group1" type="radio" /> */}
        <Form.Text style={textStyles}>
          <br />
          • Explain what the arm's functionality is.
          <br />
          • Does it have a single pivot point or multiple?
          <br />
          • Is it capable of extending? Any more observations:
          <br />
        </Form.Text>
        <Form.Control placeholder="Describe it here" as="textarea" rows={2} />
      </Form>
      <br />
      {/* Charge Station Strategy */}
      <Form>
        <Form.Label>
          <b>Charge Station Strategy</b>
        </Form.Label>
        <Form.Text style={textStyles}>
            <br />
        • Does the robot attempt to dock on the Charging Station?
          <br />
        • Does it have a mechanism to help balance/dock?
          <br />
        </Form.Text>
        <Form.Control placeholder="Your observations" as="textarea" rows={2} />
      </Form>

      {/* <Form>
        <Form.Label>
          How do they grab game pieces?
        </Form.Label>
        <Form.Select onChange={(e) => setGrabberType(e.target.value)}>
          <option value="">Open this select menu</option>
          <option value="Claw">Claw?</option>
          <option value="Wheels">Wheels?</option>
          <option value="Other">Other?</option>
        </Form.Select>
        {
          grabberType === "Other" ?
          <>
            YOU CHOPESE OTHER
          </>
          :
          <>
            DASIDSA
          </>
        }
      </Form> */}
    </Alert>
  );
};