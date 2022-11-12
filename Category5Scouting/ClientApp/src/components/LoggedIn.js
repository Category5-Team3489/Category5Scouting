import React from 'react';
import { Route } from 'react-router';

import { Clicker } from './Clicker';
import { Home } from './Home';
import { Menu } from './Menu';
import { Scout } from './Scout';
import { Settings } from './Settings';
import { UsefulLinks } from './UsefulLinks';
import { WeatherForecast } from './WeatherForecast';

export function LoggedIn( {state} ) {
  return (
    <>
      {/* Always render the menu at the top */}
      <Menu />

      {/* Render the appropriate components based on the url */}
      <Route exact path="/" component={Home} />
      <Route path="/weather-forecast" component={WeatherForecast} />
      <Route path="/useful-links" component={UsefulLinks} />
      <Route path="/scout" component={Scout} />
      <Route path="/clicker">
        <Clicker state={state} />
      </Route>
      <Route path="/settings">
        <Settings state={state} />
      </Route>
    </>
  );
};