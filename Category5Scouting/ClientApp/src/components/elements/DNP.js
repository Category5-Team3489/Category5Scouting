import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from './SyncedTextBox';

const textStyles = {
  color: "black"
}

export const DNP = () => {

    return (
        <Alert variant="danger">
            <Container fluid>
                <Alert.Heading>
                    <b>DNP?</b>
                    <br />
                    ---------------------------------
                </Alert.Heading>
                <Form.Text style={textStyles}>
                    In your words please explain why you believe this team should be on the DNP list. <i>Be specific!</i>
                    <br />
                    <br />
                </Form.Text>
                </Container>
        </Alert>
    );
};
