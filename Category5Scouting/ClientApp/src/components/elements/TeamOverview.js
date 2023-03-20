import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from './SyncedTextBox';
import { SyncedNumberSelect } from '../elements/SyncedNumberSelect';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export const TeamOverview = ( {selectedTeamState} ) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Team {selectedTeamState.get().team_number}: {selectedTeamState.get().nickname} Match-by-Match Observations
      </Alert.Heading>

      <SyncedTextBox
        placeholder="Your observations"
        rows={3}
        name={selectedTeamState.get().team_number + "overview"}
      />
<br />
<Alert.Heading>
  Overall Team Rank
</Alert.Heading>
{/* <Container fluid> */}
<b>Scouter 1 Ranking:</b>
<SyncedNumberSelect name={selectedTeamState.get().team_number + "Overall Rank 1"} />
<br />
<b>Scouter 2 Ranking:</b>
<SyncedNumberSelect name={selectedTeamState.get().team_number + "Overall Rank 2"} />
    </Alert>
  );
};