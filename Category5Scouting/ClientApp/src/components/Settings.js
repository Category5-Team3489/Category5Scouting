import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Settings( {scouterIdState, scouterNameState} ) {
  /*
  const scouters = [
    { id: "1", name: "Mr. Blake" },
    { id: "2", name: "Ben" },
    { id: "3", name: "Connor" }
  ]
  */

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
    if (!/^[A-Za-z\s]*$/.test(scouterName) || scouterName.length > 24) {
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
    let scouterId = scouterIdState.get();
    if (scouterId === "") {
      return;
    }
    setScouter("", "");
    fetch('api/delete-scouter?id=' + encodeURIComponent(scouterId))
      .then(response => response.json())
      .then(data => setScouters(data));
  }

  let setScouter = (id, name) => {
    scouterIdState.set(id);
    scouterNameState.set(name);
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
            <Form.Select className="mb-3" aria-label="Scouter selection"
              onChange={(e) => {
                let id = e.target.value;
                let nameSearch = scouters.find(scouter => scouter.id === e.target.value);
                let name = nameSearch == undefined ? "" : nameSearch.name;
                setScouter(id, name);
              }}
              value={scouterIdState.get()}
            >
              <option key="" value="">Select your name</option>
              {scouters.map((scouter) => <option key={scouter.id} value={scouter.id}>{scouter.name}</option>)}
            </Form.Select>
            <InputGroup className="mb-3">
              <Button variant="outline-success" id="create-scouter" onClick={createScouter}>
                Create
              </Button>
              <Form.Control placeholder="Scouter's name" aria-label="Create scouter name"
              onChange={(e) => setCreateScouterName(e.target.value)} value={createScouterName}/>
            </InputGroup>
            {
              scouterIdState.get() !== "" ? (
                <InputGroup className="mb-3">
                  <Button variant="outline-danger" id="delete-scouter" onClick={deleteScouter}>
                    Delete Selected
                  </Button>
                  <Form.Control aria-label="Selected scouter id" value={scouterIdState.get()} readOnly/>
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