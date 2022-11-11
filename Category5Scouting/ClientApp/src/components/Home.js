import { Alert } from 'react-bootstrap';
import React, { useState, Component } from 'react';
import Container from 'react-bootstrap/Container';

export function Home() {
  return (
    <Container className="p-4">
      <Alert>
        <Alert.Heading>
          Welcome to the 3489 Scouting App!
        </Alert.Heading>
      </Alert>
    </Container>
  );
};