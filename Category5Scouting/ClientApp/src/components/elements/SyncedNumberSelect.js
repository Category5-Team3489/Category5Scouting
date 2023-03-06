import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

export const SyncedNumberSelect = () => {
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { name: "😭", value: -2 },
    { name: "😢", value: -1 },
    { name: "😐", value: 0 },
    { name: "😁", value: 1 },
    { name: "😍", value: 2 },
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