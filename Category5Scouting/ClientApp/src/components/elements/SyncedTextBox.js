import React, { useEffect, useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';

export const SyncedTextBox = ( {className, placeholder, rows, key} ) => {
  const [remoteValue, setRemoteValue] = useState("");
  const [localValue, setLocalValue] = useState("");
  const [hasLoaded, setLoaded] = useState(false);
  const [isRemoteDirty, setRemoteDirty] = useState(false);

  const textareaRef = useRef();

  let load = () => {
    fetch("api/get?key=" + encodeURIComponent(key))
      .then(response => response.text())
      .then(data => {
        if (!hasLoaded) {
          setLoaded(true);
          setTextareaValue(data);
        }
        else {
          if (data != remoteValue) {
            setRemoteDirty(true);
          }
        }

        setRemoteValue(data);
      });
  }
  let save = () => {
    fetch("api/set?key=" + key + "&value=" + encodeURIComponent(getTextareaValue()));
  }

  let getTextareaValue = () => {
    return textareaRef.current.value;
  }
  let setTextareaValue = (value) => {
    setLocalValue(value);
    textareaRef.current.value = value;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      load();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRemoteDirty) {
        setRemoteDirty(false);
        setTextareaValue(remoteValue);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Form>
      <Form.Group className={className}>
        <Form.Control
          placeholder={placeholder}
          as="textarea"
          rows={rows}
          onChange={() => {
            if (localValue != getTextareaValue()) {
              setLocalValue(getTextareaValue());
              save();
            }
          }}
          ref={textareaRef}
        />
      </Form.Group>
    </Form>
  );
};