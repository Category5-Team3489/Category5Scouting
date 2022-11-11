import React, { useEffect } from 'react';
import { ScouterSelection } from './ScouterSelection';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

export function LoggedOut( {state} ) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Container fluid className="p-4">
      <Alert className="mb-3" variant="danger">
        <Alert.Heading>3489 Scouting App</Alert.Heading>
        Please select your name from the dropdown below
      </Alert>
      
      <div className="mb-3">
        <ScouterSelection
        scouterIdState={state.scouterIdState}
        scouterNameState={state.scouterNameState}/>
      </div>
    </Container>
  );
};