import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import { SyncedTextBox } from './SyncedTextBox';

import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ReactSketchCanvas } from "react-sketch-canvas";

export const SyncedFieldMap = ({ name }) => {
    const [remoteValue, setRemoteValue] = useState("");
    const [isRemoteDirty, setRemoteDirty] = useState(true);
    const [isLocalDirty, setLocalDirty] = useState(false);

    const mapareaRef = useRef();

    useEffect(() => {
        setRemoteValue("");
        setRemoteDirty(true);
        setLocalDirty(false);
    }, [name]);

    let load = () => {
        fetch("api/get?key=" + "map" + encodeURIComponent(name))
            .then(response => response.text())
            .then(data => {
                if (data != remoteValue) {
                    if (isLocalDirty) {
                        if (data == getMapAreaValue()) {
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
        fetch("api/set?key=" + "map" + name + "&value=" + encodeURIComponent(getMapAreaValue()));
    }

    let getMapAreaValue = () => {
        return mapareaRef.current.value;
    }
    let setMapAreaValue = (value) => {
        mapareaRef.current.value = value;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            load();
        }, 1000 + Math.floor(Math.random() * 1000));

        return () => clearInterval(interval);
    }, [remoteValue, isRemoteDirty, isLocalDirty]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRemoteDirty) {
                setRemoteDirty(false);
                setMapAreaValue(remoteValue);
            }
        }, 1000 + Math.floor(Math.random() * 1000));

        return () => clearInterval(interval);
    }, [remoteValue, isRemoteDirty, isLocalDirty]);

    return (
        /* https://github.com/vinothpandian/react-sketch-canvas */
     <div>
     <Container fluid>
      {isLocalDirty ? (<Spinner animation="border" variant="secondary" size="sm" />) : (<>Saved</>)}
      <ReactSketchCanvas fluid
        backgroundImage="https://i.imgur.com/7IqCvi0.png"
        // style={styles}
        // width="100%"
        height="320px"
        preserveBackgroundImageAspectRatio="xMidYMid meet"
        strokeWidth={4}
        strokeColor="red"
        onChange={() => {
          setLocalDirty(true);
          save();
        }}
        ref={mapareaRef}
      />
      </Container>
      </div>
    );
}