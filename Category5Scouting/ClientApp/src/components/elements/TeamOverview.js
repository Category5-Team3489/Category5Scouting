import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { SyncedTextBox } from './SyncedTextBox';

export const TeamOverview = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Team 3489: Category 5
      </Alert.Heading>

      <SyncedTextBox
        className="mb-3"
        placeholder="Overview of team"
        rows={3}
      />
    </Alert>
  );
};