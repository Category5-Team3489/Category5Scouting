import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export const TeamOverview = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Team 3489: Category 5
      </Alert.Heading>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Overview of team" as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Alert>
  );
};