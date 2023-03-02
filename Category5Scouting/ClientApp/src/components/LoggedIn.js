import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Menu } from './Menu';

import { Home } from './pages/Home';
import { TeamSheets } from './pages/TeamSheets';
// import { Rankings } from './archive/Rankings';
// import { Settings } from './archive/Settings';
import { Dashboard } from './pages/Dashboard';

import { UsefulLinks } from './other/UsefulLinks';
// import { WeatherForecast } from './archive/WeatherForecast';
// import { Clicker } from './archive/Clicker';

const GetRoutes = (state) => [
  {
    index: true,
    element: <Home />
  },
  // Main Pages
  {
    path: "/team-sheets",
    element: <TeamSheets />
  },
  // {
  //   path: "/rankings",
  //   element: <Rankings state={state} />
  // },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  // {
  //   path: "/settings",
  //   element: <Settings state={state} />
  // },
  // Other Pages
  // {
  //   path: "/weather-forecast",
  //   element: <WeatherForecast />
  // },
  {
    path: "/useful-links",
    element: <UsefulLinks />
  },
  // {
  //   path: "/clicker",
  //   element: <Clicker state={state} />
  // }
];

export function LoggedIn( {state} ) {
  return (
    <>
      {/* Always render the menu at the top */}
      <Menu />
      
      {/* Render the appropriate components based on the url */}
      <Routes>
        {
          GetRoutes(state).map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })
        }
      </Routes>
    </>
  );
};