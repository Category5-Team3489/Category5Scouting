import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Clicker } from './Clicker';
import { Home } from './Home';
import { Menu } from './Menu';
import { Scout } from './Scout';
import { Settings } from './Settings';
import { UsefulLinks } from './UsefulLinks';
import { Route } from 'react-router';
import { WeatherForecast } from './WeatherForecast';

export function LoggedIn( {state} ) {
  return (
    <>
      <Menu />

      <Route exact path='/' component={Home} />
      <Route path='/fetch-data' component={WeatherForecast} />
      <Route path='/settings'>
        <Settings state={state} />
      </Route>
      <Route path='/useful-links' component={UsefulLinks} />
      <Route path='/scout' component={Scout} />
      <Route path='/clicker'>
        <Clicker state={state} />
      </Route>
    </>
  );
};