import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component

export const Settings = () => {
  /*
  const scouters = [
    { id: "1", name: "Mr. Blake" },
    { id: "2", name: "Ben" },
    { id: "3", name: "Connor" }
  ]
  */

  const [scouter, setScouter] = useState("null");

  const [scouters, setScouters] = useState([]);

  const [addScouterName, setAddScouterName] = useState("");

  // Heartbeat the selected scouter to the server once a second or so

  useEffect(() => {
    fetch('scouters')
    .then(response => response.json())
    .then(data => setScouters(data));
  });

  let addScouter = () => {
    fetch('add-scouter?name=' + encodeURIComponent(addScouterName))
    .then(response => response.json())
    .then(data => setScouters(data));
  }

  return (
    <Container fluid className="p-4">
    <Row>
      <Col>
        <Alert variant="success">
          <Alert.Heading>Scouter Selection</Alert.Heading>
          <Form.Select aria-label="Scouter" onChange={(e) => setScouter(e.target.value)}>
            <option key="0" value="null">Select your name</option>
            {scouters.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Form.Select>
          Selected scouter: {scouter}
        </Alert>
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="add-scouter" onClick={addScouter}>
            Add Scouter
          </Button>
          <Form.Control aria-label="Add scouter" onChange={(e) => setAddScouterName(e.target.value)}/>
        </InputGroup>
      </Col>
      <Col>
      <Alert variant="success">
        <Alert.Heading>Preferences</Alert.Heading>
      </Alert>
      </Col>
    </Row>
    </Container>
  );
};