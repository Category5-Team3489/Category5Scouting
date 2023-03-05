import React from 'react';

import Container from 'react-bootstrap/Container';

import { PitScouting } from '../elements/PitScouting';
import { MatchScouting } from '../elements/MatchScouting';
import { TeamSelector } from '../elements/TeamSelector';
import { TeamOverview } from '../elements/TeamOverview';

export const TeamSheets = ( {state} ) => {
  return (
    <Container fluid className="p-4">
      <TeamSelector selectedTeamState={state.selectedTeamState} />
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
