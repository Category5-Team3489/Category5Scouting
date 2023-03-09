import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export const SyncedNumberSelect = ( {name} ) => {
  const [remoteValue, setRemoteValue] = useState("");
  const [isRemoteDirty, setRemoteDirty] = useState(true);
  const [isLocalDirty, setLocalDirty] = useState(false);

  const [radioValue, setRadioValue] = useState("");

  const radios = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  let getVariant = (value) => {
    if (value >= 8) {
      return 'outline-success';
    } else if (value <= 3) {
      return 'outline-danger';
    } else {
      return 'outline-secondary';
    }
  };

  useEffect(() => {
    setRemoteValue("");
    setRemoteDirty(true);
    setLocalDirty(false);
  }, [name]);
  
  useEffect(() => {
    if (!isLocalDirty) {
      return;
    }

    save();
  }, [radioValue], isLocalDirty)

  let load = () => {
    fetch("api/get?key=" + "number" + encodeURIComponent(name))
      .then(response => response.text())
      .then(data => {
        if (data != remoteValue) {
          if (isLocalDirty) {
            if (data == radioValue) {
              setLocalDirty(false);
            }
          }
          else {
            setRemoteDirty(true);
          }
        }

        setRemoteValue(data);
      });
  }
  let save = () => {
    fetch("api/set?key=" + "number" + name + "&value=" + encodeURIComponent(radioValue));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      load();
    }, 250);

    return () => clearInterval(interval);
  }, [remoteValue, isRemoteDirty, isLocalDirty, radioValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRemoteDirty) {
        setRemoteDirty(false);
        setRadioValue(remoteValue);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [remoteValue, isRemoteDirty, isLocalDirty, radioValue]);

  return (
    <Stack direction="horizontal" gap={3}>
      {isLocalDirty ? (<Spinner animation="border" variant="secondary" size="sm" />) : (<>Saved</>)}
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={name + idx}
            type="radio"
            variant={getVariant(radio.value)}
            value={radio.value}
            checked={radioValue == radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              setLocalDirty(true);
            }}
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