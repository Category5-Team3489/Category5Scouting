import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from '../elements/SyncedTextBox';
import { SyncedNumberSelect } from '../elements/SyncedNumberSelect';

export const Dashboard = ({ selectedTeamState }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("api/teams")
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div>
      <Alert className="m-4">
        <Alert.Heading>
          Dashboard
        </Alert.Heading>
      </Alert>
      {teams.map((team, idx) =>
        <Container className="p-4">
          <Row>
            <Col>
              <div class="card bg-light">
                <div class="card-body" key={idx}>
                  <h4 class="card-header">
                    <b>{team.nickname}</b>
                    <br />
                    {team.team_number}
                    <br />
                  </h4>
                  <Accordion>
                    <Accordion.Header><h6>Auto</h6></Accordion.Header>
                    <Accordion.Body>
                      <li class="list-group-item">Grippiness:
                        <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Auto Grippiness"}
                        />
                        {/* <SyncedNumberSelect name={team.team_number + "Auto Grippiness"} /> */}
                      </li>
                      <li class="list-group-item">Placement:
                        <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Auto Placement"}
                        />
                      </li>
                      <li class="list-group-item">Navigability: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Auto Navigability"}
                        />
                      </li>
                    </Accordion.Body>
                  </Accordion>
                  <div class="dropdown-divider"></div>
                  <Accordion>
                    <Accordion.Header><h6>Tele-op</h6></Accordion.Header>
                    <Accordion.Body>
                      <li class="list-group-item">Grippiness: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Grippiness"}
                        />
                      </li>
                      <li class="list-group-item">Placement: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Placement"}
                        />
                      </li>
                      <li class="list-group-item">Elusive Driving: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Elusive Driving"}
                        />
                      </li>
                      <li class="list-group-item">Defensive Driving: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Defensive Driving"}
                        />
                      </li>
                      <li class="list-group-item">Drive Team Coordination: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Drive Team Coordination"}
                        />
                      </li>
                      <li class="list-group-item">Charge Station Balancing: 
                      <SyncedTextBox
                          placeholder="Overview of team"
                          rows={3}
                          name={team.team_number + "Charge Station"}
                        />
                      </li>
                    </Accordion.Body>
                  </Accordion>
                  <div class="dropdown-divider"></div>
                  <Accordion>
                    <Accordion.Header><h6>Additional and Strategy Notes</h6></Accordion.Header>
                    <Accordion.Body>
                      <SyncedTextBox
                        placeholder="Additional Notes"
                        rows={3}
                        name={team.team_number + "Additional Notes:"}
                      />
                      <SyncedTextBox
                        placeholder="Strategy Notes"
                        rows={3}
                        name={team.team_number + "Strategy Notes"}
                      />
                    </Accordion.Body>
                  </Accordion>
                  <div class="dropdown-divider"></div>
                  <Accordion>
                    <Accordion.Header><h6>DNP?</h6></Accordion.Header>
                    <Accordion.Body>
                      <Alert variant="danger">
                        <SyncedTextBox
                          placeholder="DNP?"
                          rows={2}
                          name={team.team_number + "DNP"}
                        />
                      </Alert>
                    </Accordion.Body>
                  </Accordion>
                  {/* {team.city}
            <br />
            {team.state_prov}
            <br />
            {team.country} */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};