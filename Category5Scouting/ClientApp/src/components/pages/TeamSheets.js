import React from 'react';

import Container from 'react-bootstrap/Container';

import { PitScouting } from '../elements/PitScouting';
import { MatchScouting } from '../elements/MatchScouting';
import { TeamSelector } from '../elements/TeamSelector';
import { TeamOverview } from '../elements/TeamOverview';

export const TeamSheets = () => {
  return (
    <Container fluid className="p-4">
      <TeamSelector />
      <br />
      <br />
      <TeamOverview />
      <br />
      <br />
      <PitScouting />
      <br />
      <br />
      <MatchScouting />
    </Container>
  );
};
