import React, { useState, Component } from 'react';
import { LoggedOut } from './components/LoggedOut';
import { LoggedIn } from './components/LoggedIn';

export default function App() {

  function StateHook(initialState) {
    const [state, setState] = useState(initialState);
    this.get = () => state;
    this.set = (newState) => setState(newState);
  }

  function State() {
    this.scouterIdState = new StateHook("");
    this.scouterNameState = new StateHook("");
  }
  
  const state = new State();

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
