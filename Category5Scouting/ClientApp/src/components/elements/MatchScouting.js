import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


import { ReactSketchCanvas } from "react-sketch-canvas";

export const MatchScouting = () => {
    const ranks = [
        {name: "0", value: 0},
        {name: "1", value: 1},
        {name: "2", value: 2},
        {name: "3", value: 3},
        {name: "4", value: 4},
        {name: "5", value: 5},
    ]
    return (
        <Alert variant="success">
            <Alert.Heading>
                Match Scouting
            </Alert.Heading>


        <Form>
            <Form.Group>
            <Form.Label>
                <br />
                <b>Test</b>
            </Form.Label>
            </Form.Group>

    <Container>
      <Row>
        <Col lg={true}>1 of 1</Col>
        <Col lg={true}>Another./;;;;;;;;;;;;;;</Col>
        <Col lg={true}>And another</Col>
        <Col lg={true}>Okay one more</Col>
      </Row>
    </Container>

        </Form>
        </Alert>
    )
}