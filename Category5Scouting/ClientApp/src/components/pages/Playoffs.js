import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from '../elements/SyncedTextBox';
import { SyncedNumberSelect } from '../elements/SyncedNumberSelect';

export const Playoffs = ({ selectedTeamState }) => {

    return (
        <Container fluid className="p-4">
            <Alert variant="info">
                <Alert.Heading>
                    Alliance #1:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 1"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #2:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 2"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #3:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 3"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #4:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 4"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #5:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 5"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #6:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 6"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #7:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 7"}
                />
                <br />
                <br />
                <Alert.Heading>
                    Alliance #8:
                </Alert.Heading>
                <Form>
                    <Form.Label>
                        <b>Alliance info, observations, tendencies, and strategies:</b>
                    </Form.Label>
                </Form>
                <SyncedTextBox
                    className=""
                    placeholder="Info, observations, tendencies, and strategies"
                    rows={4}
                    name={selectedTeamState.team_number + "Alliance 8"}
                />
            </Alert>
        </Container>
    )
}