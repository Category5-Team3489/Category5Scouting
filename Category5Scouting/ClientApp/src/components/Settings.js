import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

  const [createScouterName, setCreateScouterName] = useState("");

  // Heartbeat the selected scouter to the server once a second or so

  useEffect(() => {
    fetch('api/scouters')
      .then(response => response.json())
      .then(data => setScouters(data));
  });

  let createScouter = () => {
    let scouterName = createScouterName.trim();
    if (!/^[A-Za-z\s]*$/.test(scouterName)) {
      return;
    }
    if (scouterName.length < 1) {
      setCreateScouterName("");
      return;
    }
    fetch('api/create-scouter?name=' + encodeURIComponent(createScouterName))
      .then(response => response.json())
      .then(data => setScouters(data));
    setCreateScouterName("");
  }

  let deleteScouter = () => {
    setScouter("null");
    fetch('api/delete-scouter?id=' + encodeURIComponent(scouter))
      .then(response => response.json())
      .then(data => setScouters(data));
  }

  let shutdown = () => {
    fetch('api/end');
  }

  return (
    <Container fluid className="p-4">
      <Row>
        <Col sm={8}>
          <Alert variant="dark">
            <Alert.Heading>Scouter Selection</Alert.Heading>
            <Form.Select aria-label="Scouter selection" onChange={(e) => setScouter(e.target.value)}>
              <option key="null" value="null">Select your name</option>
              {scouters.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </Form.Select>
            <br />
            <InputGroup className="mb-3">
              <Button variant="outline-success" id="create-scouter" onClick={createScouter}>
                Create
              </Button>
              <Form.Control placeholder="Scouter's name" aria-label="Create scouter name"
              onChange={(e) => setCreateScouterName(e.target.value)} value={createScouterName}/>
            </InputGroup>
            {
              scouter !== "null" ? (
                <InputGroup className="mb-3">
                  <Button variant="outline-danger" id="delete-scouter" onClick={deleteScouter}>
                    Delete Selected
                  </Button>
                  <Form.Control aria-label="Selected scouter id" value={scouter} readOnly/>
                </InputGroup>
              ) : (
                <Button variant="outline-danger" id="delete-scouter" disabled>
                  Delete Selected
                </Button>
              )
            }
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert variant="dark">
            <Alert.Heading>Other</Alert.Heading>
            <Button variant="danger" id="shutdown" onClick={shutdown}>
              ⚠️Shutdown⚠️
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};