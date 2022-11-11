import React, { useState, Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import { UsefulLinks } from './components/UsefulLinks';
import { Scout } from './components/Scout';
import { Clicker } from './components/Clicker';
import Alert from 'react-bootstrap/Alert';

import './custom.css'

export default function App() {

  function StateHook(initialState) {
    const [state, setState] = useState(initialState);
    this.get = () => state;
    this.set = (newState) => setState(newState);
  }
  
  const scouterIdState = new StateHook("");
  const scouterNameState = new StateHook("");

  const isLoggedIn = () => scouterIdState.get() !== "";
  
  return (
    <>
      {
        isLoggedIn() ? (
          <Settings
            scouterIdState={scouterIdState}
            scouterNameState={scouterNameState}
          />
        ) : (
          <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/settings'>
              <Settings
                scouterIdState={scouterIdState}
                scouterNameState={scouterNameState}
              />
            </Route>
            <Route path='/useful-links' component={UsefulLinks} />
            <Route path='/scout' component={Scout} />
            <Route path='/clicker' component={Clicker} />
          </Layout>
        )
      }
    </>
  );
}
