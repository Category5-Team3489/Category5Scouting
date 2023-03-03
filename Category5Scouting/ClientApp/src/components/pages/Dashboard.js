import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export const Dashboard = ( {state} ) => {
  return (
    <Container className="p-4">
      <Alert>
        <Alert.Heading>
          Dashboard
        </Alert.Heading>
        Dashboard
      </Alert>
    </Container>
  );
};