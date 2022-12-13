import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Clicker } from './Clicker';
import { Home } from './Home';
import { Menu } from './Menu';
import { Rankings } from './Rankings';
import { Scout } from './Scout';
import { Settings } from './Settings';
import { UsefulLinks } from './UsefulLinks';
import { WeatherForecast } from './WeatherForecast';

const GetRoutes = (state) => [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/weather-forecast",
    element: <WeatherForecast />
  },
  {
    path: "/useful-links",
    element: <UsefulLinks />
  },
  {
    path: "/scout",
    element: <Scout />
  },
  {
    path: "/clicker",
    element: <Clicker state={state} />
  },
  {
    path: "/settings",
    element: <Settings state={state} />
  },
  {
    path: "/rankings",
    element: <Rankings state={state} />
  }
];

export function LoggedIn( {state} ) {
  return (
    <>
      {/* Always render the menu at the top */}
      <Menu />
      
      {/* Render the appropriate components based on the url */}
      <Routes>
        {GetRoutes(state).map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </>
  );
};