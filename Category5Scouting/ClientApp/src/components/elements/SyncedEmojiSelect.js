import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

export const SyncedEmojiSelect = ( {name} ) => {
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ];

  let getVariant = (value) => {
    if (value >= 7) {
      return 'outline-success';
    } else if (value <= 4) {
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
            id={name + idx}
            type="radio"
            variant={getVariant(radio.value)}
            value={radio.value}
            checked={radioValue == radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            <h1>
              {radio.value}
            </h1>
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Stack>
  );
};