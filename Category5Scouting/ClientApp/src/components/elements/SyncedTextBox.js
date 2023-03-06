import React, { useEffect, useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

export const SyncedTextBox = ( {className, placeholder, rows, name} ) => {
  const [remoteValue, setRemoteValue] = useState("");
  const [isRemoteDirty, setRemoteDirty] = useState(true);
  const [isLocalDirty, setLocalDirty] = useState(false);

  const textareaRef = useRef();

  useEffect(() => {
    setRemoteValue("");
    setRemoteDirty(true);
    setLocalDirty(false);
  }, [name]);

  let load = () => {
    fetch("api/get?key=" + encodeURIComponent(name))
      .then(response => response.text())
      .then(data => {
        if (data != remoteValue) {
          if (isLocalDirty) {
            if (data == getTextareaValue()) {
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
    fetch("api/set?key=" + name + "&value=" + encodeURIComponent(getTextareaValue()));
  }

  let getTextareaValue = () => {
    return textareaRef.current.value;
  }
  let setTextareaValue = (value) => {
    textareaRef.current.value = value;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      load();
    }, 250);

    return () => clearInterval(interval);
  }, [remoteValue, isRemoteDirty, isLocalDirty]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRemoteDirty) {
        setRemoteDirty(false);
        setTextareaValue(remoteValue);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [remoteValue, isRemoteDirty, isLocalDirty]);

  return (
    <Form>
      {isLocalDirty ? (<Spinner animation="border" variant="danger" size="sm" />) : (<>Saved</>)}
      <Form.Group className={className}>
        <Form.Control
          placeholder={placeholder}
          as="textarea"
          rows={rows}
          onChange={() => {
            setLocalDirty(true);
            save();
          }}
          ref={textareaRef}
        />
      </Form.Group>
    </Form>
  );
};