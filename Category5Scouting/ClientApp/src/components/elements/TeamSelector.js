import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export const TeamSelector = ( {selectedTeamState} ) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("api/teams")
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  let getSelectedTeam = () => {
    return selectedTeamState.get();
  }

  let setSelectedTeam = (team) => {
    selectedTeamState.set(team);
  }
  
  return (
    <Alert variant="dark">
      <Alert.Heading>
        Select Team
      </Alert.Heading>
      Please select the team you would like to scout
      <Form.Select
        value={getSelectedTeam()}
        onChange={(e) => {setSelectedTeam(e.target.value)}}
      >
        <option key="" value={undefined}>Select team</option>
        {teams.sort((a, b) => a.team_number - b.team_number).map(team =>
          <option key={team.team_number} value={team.team_number}>
            {team.team_number}: {team.nickname}
          </option>
        )}
      </Form.Select>
    </Alert>
  );
};