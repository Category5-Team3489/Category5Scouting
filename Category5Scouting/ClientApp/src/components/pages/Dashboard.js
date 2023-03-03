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
                            <h4 class="card-header">
                                <b>281</b>
                                <br />
                                The GreenVillains
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>342</b>
                                <br />
                                Burning Magnetos
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>343</b>
                                <br />
                                Metal-In-Motion
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>1051</b>
                                <br />
                                Technical Terminators
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>1102</b>
                                <br />
                                The GreenVillains
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>1287</b>
                                <br />
                                The GreenVillains
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>1293</b>
                                <br />
                                The GreenVillains
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header">
                                <b>1319</b>
                                <br />
                                The GreenVillains
                            </h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>343</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>281</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col>
                    <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col></Col>

                <Col>
                <br />
                    <div class="card bg-light">
                        <div class="card-body">
                            <h4 class="card-header"><b>342</b></h4>
                            <div class="card-header">
                                <h7>DNP?</h7>
                                <br />
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </div>
                                <Accordion>
                                    <Accordion.Header><h6>Auto:</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Navigability: </li>
                                    </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <li class="list-group-item">Grippiness: </li>
                                            <li class="list-group-item">Placement: </li>
                                            <li class="list-group-item">Elusive Driving: </li>
                                            <li class="list-group-item">Defensive Driving: </li>
                                            <li class="list-group-item">Drive Team Coordination: </li>
                                            <li class="list-group-item">Charge Station Balancing: </li>
                                        </Accordion.Body>
                                </Accordion>
                            <div class="dropdown-divider"></div>
                                <Accordion>
                                    <Accordion.Header><h6>Strategy Notes</h6></Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control placeholder="Your Observations" as="textarea" rows={3} />
                                        </Accordion.Body>
                                </Accordion>
                        </div>
                    </div>
                </Col>

                <Col></Col>
            </Row>
        </Container>
    )
}