import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export const Home = () => {
  return (
    <Container className="p-4">
      <Alert>
        <Alert.Heading>
          Welcome to the 3489 Scouting App!
        </Alert.Heading>
        Coming soon to a robotics team near you!
      </Alert>
    </Container>
  );
};