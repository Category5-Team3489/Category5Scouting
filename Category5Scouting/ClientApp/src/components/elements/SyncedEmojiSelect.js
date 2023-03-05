import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

export const SyncedEmojiSelect = () => {
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
  ];

  let getVariant = (value) => {
    if (value > 0) {
      return 'outline-success';
    } else if (value < 0) {
      return 'outline-danger';
    } else {
      return 'outline-secondary';
    }
  };

  return (
    <Stack direction="horizontal" gap={3}>
    <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={idx}
            type="radio"
            variant={getVariant(radio.value)}
            value={radio.value}
            checked={radioValue == radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            <h1>
              {radio.name}
            </h1>
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Stack>
  );
};