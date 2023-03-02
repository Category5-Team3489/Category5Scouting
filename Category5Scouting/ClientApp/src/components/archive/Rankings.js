import React, { useState } from 'react';
import { Accordion, ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';

export function Rankings() {
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { name: "-2", value: -2 },
    { name: "-1", value: -1 },
    { name: "0", value: 0 },
    { name: "+1", value: 1 },
    { name: "+2", value: 2 },
  ];

  let getVotingButtonVariant = (value) => {
    if (value > 0) {
      return 'outline-success';
    } else if (value < 0) {
      return 'outline-danger';
    } else {
      return 'outline-secondary';
    }
  };

  return (
    <Container className="p-4">
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Stack>
              <Stack direction="horizontal" gap={3}>
                <h3>+1000</h3>
                <h3>Team 3489</h3>

                <a href="https://www.thebluealliance.com/team/3489" rel="noopener noreferrer" target="_blank">The Blue Alliance</a>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={getVotingButtonVariant(radio.value)}
                        name="radio"
                        value={radio.value}
                        checked={radioValue == radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
              </Stack>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Placeholder</Accordion.Header>
          <Accordion.Body>
            Placeholder
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Placeholder</Accordion.Header>
          <Accordion.Body>
            Placeholder
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};