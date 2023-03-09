import React from 'react';

import Container from 'react-bootstrap/Container';

import { PitScouting } from '../elements/PitScouting';
import { MatchScouting } from '../elements/MatchScouting';
import { TeamSelector } from '../elements/TeamSelector';
import { TeamOverview } from '../elements/TeamOverview';
import { DNP } from '../elements/DNP';

export const TeamSheets = ( {state} ) => {
  let isTeamSelected = () => state.selectedTeamState.get() != null;

  return (
    <Container fluid className="p-4">
      <TeamSelector selectedTeamState={state.selectedTeamState} />
      {
        isTeamSelected() ? (
          <>
            <br />
            <br />
            <TeamOverview selectedTeamState={state.selectedTeamState} />
            <br />
            <br />
            <PitScouting selectedTeamState={state.selectedTeamState} />
            <br />
            <br />
            <MatchScouting selectedTeamState={state.selectedTeamState} />
            <br />
            <br />
            <DNP selectedTeamState={state.selectedTeamState} />
          </>
        ) : (
          <>
            
          </>
        )
      }
    </Container>
  );
};
