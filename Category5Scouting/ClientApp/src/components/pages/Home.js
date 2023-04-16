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
        <h5>
          Blue Alliance Pages:
        </h5>
        <a href="https://www.thebluealliance.com/event/2023gacmp" rel="noopener noreferrer" target="_blank">
          Peachtree District Championship 2023 (Opens in new tab)
        </a>
        <br />
        <a href="https://www.thebluealliance.com/team/3489/2023" rel="noopener noreferrer" target="_blank">
          Us (Opens in new tab)
        </a>
      </Alert>
    </Container>
  );
};