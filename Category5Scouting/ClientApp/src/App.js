import React, { useState, Component } from 'react';
import { LoggedOut } from './components/LoggedOut';
import { LoggedIn } from './components/LoggedIn';

export default function App() {

  // Returns a prototype object with a hook that have a get and set function
  function StateHook(initialState) {
    const [state, setState] = useState(initialState);
    this.get = () => state;
    this.set = (newState) => setState(newState);
  }

  // Returns a prototype object with all of the state for the app
  function State() {
    this.scouterIdState = new StateHook("");
    this.scouterNameState = new StateHook("");
  }
  
  // Create a state object
  const state = new State();

  // Returns true if the user is logged out
  let isLoggedOut = () => state.scouterIdState.get() === "";
  
  return (
    <>
      {
        isLoggedOut() ? (
          <LoggedOut state={state}/>
        ) : (
          <LoggedIn state={state}/>
        )
      }
    </>
  );
}
