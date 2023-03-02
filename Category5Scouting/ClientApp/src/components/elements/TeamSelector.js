import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export const TeamSelector = () => {
    return (
        <Alert variant="dark">
            <Alert.Heading>
                Select Team
            </Alert.Heading>
            Please select the team you would like to scout
            <Form.Select aria-label="Team selection">
                <option key="" value="">Select team</option>
                <option value="1">3489: Category 5</option>
                <option value="2">342: The Burning Magnetos</option>
                <option value="3">4020: Cyber Tribe</option>
            </Form.Select>
        </Alert>
    );
};