import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export const Dashboard = ( {state} ) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("api/teams")
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <Container className="p-4">
      <Alert>
        <Alert.Heading>
          Dashboard
        </Alert.Heading>
        {
          teams.map((team, i) =>
            <Alert>
              {team.nickname}
              <br />
              {team.team_number}
              <br />
              {team.city}
              <br />
              {team.state_prov}
              <br />
              {team.country}
            </Alert>
          )
        }
      </Alert>
    </Container>
  );
};