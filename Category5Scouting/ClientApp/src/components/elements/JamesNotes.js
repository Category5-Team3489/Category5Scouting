import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


import { ReactSketchCanvas } from "react-sketch-canvas";
import { SyncedNumberSelect } from '../elements/SyncedNumberSelect';
import { SyncedTextBox } from './SyncedTextBox';

export const JamesNotes = ({ selectedTeamState }) => {
    return (
        <Alert variant="warning">
            <Alert.Heading>
                James Notes:
            </Alert.Heading>
            <SyncedTextBox
                placeholder="Update as needed"
                rows={2}
                name={selectedTeamState.get().team_number + "James"}
            />
        </Alert>
    )}