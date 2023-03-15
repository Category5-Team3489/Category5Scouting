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
      <br />

    <SyncedFieldMap />

      {/* BEST THINGS */}
      <Form>
        <Form.Label>
          <b>What are the best things about their robot?</b>
        </Form.Label>
        <SyncedTextBox
          className=""
          placeholder="Best things"
          rows={2}
          name={selectedTeamState.get().team_number + "Best Things"}
        />
      </Form>
      <br />
      {/* GRIPPER? */}
      <Form>
        <Form.Label>
          <b>Gripper?</b>
        </Form.Label>
        <SyncedTextBox
          className=""
          placeholder="What type of gripper? Describe the design"
          rows={2}
          name={selectedTeamState.get().team_number + "Gripper"}
        />
      </Form>
      <br />
      {/* ARM */}
      <Form>
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