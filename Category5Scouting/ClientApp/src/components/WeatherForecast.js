import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

export function WeatherForecast() {
  // Hook for the weather data
  const [forecasts, setForcasts] = useState([]);

  // Hook to load the weather data on start
  useEffect(() => {
    fetch("api/weather-forecast")
      .then(response => response.json())
      .then(data => setForcasts(data));
  }, []);

  // Render the weather data
  let renderForecastsTable = (forecasts) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {/* Map weather data to table rows */}
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  return (
    <Container className="p-4">
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {
        // Render the weather data if it has loaded
        forecasts.length < 1 ? (
          <p><em>Loading...</em></p>
        ) : (
          renderForecastsTable(forecasts)
        )
      }
    </Container>
  );
};