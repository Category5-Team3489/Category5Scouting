import React, { useEffect } from 'react';
import { ScouterSelection } from './ScouterSelection';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
//import { useHistory } from "react-router-dom";

export function LoggedOut( {state} ) {
  //const history = useHistory();

  // Go to home page when this loads
  /*
  useEffect(() => {
    history.push("/")
  }, []);
  */

  return (
    <Container className="p-4">
      <Alert className="mb-3" variant="danger">
        <Alert.Heading>3489 Scouting App</Alert.Heading>
        Please select your name from the dropdown below
      </Alert>
      
      <ScouterSelection
      scouterIdState={state.scouterIdState}
      scouterNameState={state.scouterNameState}/>
    </Container>
  );
};