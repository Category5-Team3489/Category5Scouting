import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function ScouterSelection( {scouterIdState, scouterNameState} ) {
  // Hook for the list of scouters
  const [scouters, setScouters] = useState([]);

  // Hook for the name of the scouter being created
  const [createScouterName, setCreateScouterName] = useState("");

  // Load the list of scouters from the server
  useEffect(() => {
    fetch('api/scouters')
      .then(response => response.json())
      .then(data => setScouters(data));
  }, []);

  // Create a scouter with the given name
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

  // Delete a scouter with the given id
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

  // Set the scouter id and name
  let setScouter = (id, name) => {
    scouterIdState.set(id);
    scouterNameState.set(name);
  }

  // Set the scouter id and name when a scouter is selected
  let selectScouter = (id) => {
    let findName = scouters.find(scouter => scouter.id === id);
    if (findName != undefined) {
      setScouter(id, findName.name);
    }
    else {
      setScouter("", "");
    }
  }

  return (
    <Alert variant="dark">
      <Alert.Heading>Scouter Selection</Alert.Heading>
      <Form.Select className="mb-3" aria-label="Scouter selection"
      onChange={(e) => {selectScouter(e.target.value)}} value={scouterIdState.get()}>
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
  );
};