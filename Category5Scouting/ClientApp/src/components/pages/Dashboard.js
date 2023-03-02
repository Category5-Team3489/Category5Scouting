import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


import { ReactSketchCanvas } from "react-sketch-canvas";

const textStyles = {
  color: "black"
}

// const cardStyles = {
//     margin: "auto"
//     width: "18rem"
// }


// const cardStyle = {
//     color: "black",
// }

export function Dashboard() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <ul class="list-group">
                                <Accordion>
                                    <Accordion.Item>
                                        <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <ul class="list-group">
                                <Accordion>
                                    <Accordion.Item>
                                        <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <ul class="list-group">
                                <Accordion>
                                    <Accordion.Item>
                                        <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}