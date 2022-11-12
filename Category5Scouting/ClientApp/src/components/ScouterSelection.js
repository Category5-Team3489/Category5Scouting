import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function ScouterSelection( {scouterIdState, scouterNameState} ) {
  // Hook for the list of scouters
  const [scouters, setScouters] = useState([]);

  // Hook for the name of the scouter being created
  const [createScouterName, setCreateScouterName] = useState("");

  // Hook to load the list of scouters on start
  useEffect(() => {
    fetch("api/scouter/list")
      .then(response => response.json())
      .then(data => setScouters(data));
  }, []);

  // Create a scouter with the given name
  let createScouter = () => {
    // Remove leading and trailing whitespace
    let scouterName = createScouterName.trim();
    // Only allow alphabetical characters and spaces with regex
    if (!/^[A-Za-z\s]*$/.test(scouterName)) {
      return;
    }
    // Only allow names longer than 0 characters
    if (scouterName.length < 1) {
      // Clear the scouter name input field
      setCreateScouterName("");
      return;
    }
    // Only allow names shorter than 24 characters
    if (scouterName.length > 24) {
      return;
    }
    // Execute the api request and load the new list of scouters that the request returns
    fetch("api/scouter/create?name=" + encodeURIComponent(createScouterName))
      .then(response => response.json())
      .then(data => setScouters(data));
    // Clear the scouter name input field
    setCreateScouterName("");
  }

  // Delete the scouter with the given id
  let deleteScouter = () => {
    // Get the scouter id from the state
    let scouterId = scouterIdState.get();
    // Only allow deletion of scouters with an id
    if (scouterId === "") {
      return;
    }
    // Clear the scouter id and name state
    scouterIdState.set("");
    scouterNameState.set("");
    // Execute the api request and load the new list of scouters that the request returns
    fetch("api/scouter/delete?id=" + encodeURIComponent(scouterId))
      .then(response => response.json())
      .then(data => setScouters(data));
  }

  // Set the scouter id and name state from the given id
  let selectScouter = (id) => {
    // Find the scouter with the given id
    let findName = scouters.find(scouter => scouter.id === id);
    // Only set the state if the scouter was found
    if (findName !== undefined) {
      scouterIdState.set(id);
      scouterNameState.set(findName.name);
    }
    else {
      // Clear the scouter id and name state
      scouterIdState.set("");
      scouterNameState.set("");
    }
  }

  return (
    <Alert variant="dark">
      <Alert.Heading>Scouter Selection</Alert.Heading>
      <Form.Select className="mb-3" aria-label="Scouter selection"
      // On selection change, select the scouter
      // Set the value of the selection box to the scouter id state
      onChange={(e) => {selectScouter(e.target.value)}} value={scouterIdState.get()}>
        <option key="" value="">Select your name</option>
        {/* Map scouters in list to the selection box */}
        {scouters.map((scouter) => <option key={scouter.id} value={scouter.id}>{scouter.name}</option>)}
      </Form.Select>
      <InputGroup className="mb-3">
        {/* When the button is clicked create the scouter */}
        <Button variant="outline-success" id="create-scouter" onClick={createScouter}>
          Create
        </Button>
        <Form.Control placeholder="Scouter's name" aria-label="Create scouter name"
        // When the text field's value changes, use a hook to set the scouter name
        // Set the value of the text field to the create scouter name value
        onChange={(e) => setCreateScouterName(e.target.value)} value={createScouterName}/>
      </InputGroup>
      {
        // Only show the delete button if a scouter is selected
        scouterIdState.get() !== "" ? (
          <InputGroup className="mb-3">
            {/* When the button is clicked delete the scouter */}
            <Button variant="outline-danger" id="delete-scouter" onClick={deleteScouter}>
              Delete Selected
            </Button>
            {/* Show the id of the scouter being deleted */}
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