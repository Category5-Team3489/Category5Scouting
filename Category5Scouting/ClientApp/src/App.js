import React, { useState } from 'react';

// import { LoggedOut } from './components/LoggedOut';
import { LoggedIn } from './components/LoggedIn';

export default function App() {
  // Returns a prototype object with get and set methods that access a hook
  function StateHook(initialState) {
    const [state, setState] = useState(initialState);
    this.get = () => state;
    this.set = (newState) => setState(newState);
  }

  // Returns a prototype object with all of the top level state for the app
  function State() {
    // this.scouterIdState = new StateHook("");
    // this.scouterNameState = new StateHook("");
    this.selectedTeamState = new StateHook(undefined);
  }
  
  // Create state object
  const state = new State();

  // Returns true if the user is logged out
  // let isLoggedOut = () => state.scouterIdState.get() === "";
  
  return (
    <>
      {
        // Conditionally render the logged in or logged out pages
        // isLoggedOut() ? (
        //   <LoggedOut state={state} />
        // ) : (
        //   <LoggedIn state={state} />
        // )
        <LoggedIn state={state} />
      }
    </>
  );
}
