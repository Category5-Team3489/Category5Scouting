import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from './SyncedTextBox';

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
    </Alert>
  );
};