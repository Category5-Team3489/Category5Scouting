import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { SyncedFieldMap } from './SyncedFieldMap';

import { SyncedTextBox } from './SyncedTextBox';

const textStyles = {
  color: "black"
}

export const PitScouting = ( {selectedTeamState} ) => {
  return (
    <Alert variant="primary">
      <Alert.Heading>
        Pit Scouting
      </Alert.Heading>
      {/* <br /> */}

    {/* <SyncedFieldMap 
      className=""
      name={selectedTeamState.get().team_number}
    /> */}
    <br />
      {/* BEST THINGS */}
      <Form>
        <Form.Label>
          <b>1. Their opinion: Best part of the robot<br />2. Your opinion: Best part of the robot</b>
        </Form.Label>
        <SyncedTextBox
          className=""
          placeholder="1 & 2 Here"
          rows={2}
          name={selectedTeamState.get().team_number + "Best Things"}
        />
      </Form>
      <br />
      {/* GRIPPER? */}
      <Form>
        <Form.Label>
          <b>Gripper and Arm Design?</b>
        </Form.Label>
        <Form.Text style={textStyles}>
          <br />
          • Explain what the gripper's functionality is.
          <br />
          • Is it wheeled?
          <br />
          • Is it a claw? Any more observations:
          <br />
          • Explain what the arm's functionality is.
          <br />
          • Does it have a single pivot point or multiple?
          <br />
          • Is it capable of extending? Any more observations:
          <br />
        </Form.Text>
        <SyncedTextBox
          className=""
          placeholder="What type of gripper/arm? Describe the design"
          rows={4}
          name={selectedTeamState.get().team_number + "Gripper"}
        />
      </Form>
      <br />
      {/* ARM */}
      {/* <Form>
        <Form.Label>
          <b>Arm Design?</b>
        </Form.Label>
        <Form.Text style={textStyles}>
          <br />
          • Explain what the arm's functionality is.
          <br />
          • Does it have a single pivot point or multiple?
          <br />
          • Is it capable of extending? Any more observations:
          <br />
        </Form.Text>
        <SyncedTextBox
          className=""
          placeholder="Describe it here"
          rows={2}
          name={selectedTeamState.get().team_number + "Arm Design"}
        />
      </Form> */}
      {/* <br /> */}
      {/* Charge Station Strategy */}
      <Form>
        <Form.Label>
          <b>Charge Station Strategy</b>
        </Form.Label>
        <Form.Text style={textStyles}>
            <br />
        • Can the robot dock on the charge station?
          <br />
        • Does it have a mechanism to aid it?
          <br />
        • Does it seem like it could dock effectively?
          <br />
        </Form.Text>
        <SyncedTextBox
          className=""
          placeholder="Your observations"
          rows={2}
          name={selectedTeamState.get().team_number + "Charge Station Strategy"}
        />
      </Form>
    </Alert>
  );
};