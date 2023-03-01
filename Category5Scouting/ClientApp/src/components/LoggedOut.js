import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import { ScouterSelection } from './elements/ScouterSelection';

export function LoggedOut( {state} ) {
  return (
    <Container className="p-4">
      <Alert className="mb-3" variant="danger">
        <Alert.Heading>3489 Scouting App</Alert.Heading>
        Please select your name from the dropdown below
      </Alert>
      
      <ScouterSelection
        scouterIdState={state.scouterIdState}
        scouterNameState={state.scouterNameState}
      />
    </Container>
  );
};