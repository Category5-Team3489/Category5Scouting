import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';

export function WeatherForecast() {
  
  const [forecasts, setForcasts] = useState([]);

  useEffect(() => {
    fetch('api/weatherforecast')
      .then(response => response.json())
      .then(data => setForcasts(data));
  }, []);

  let renderForecastsTable = (forecasts) => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
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
        forecasts.length < 1 ? (
          <p><em>Loading...</em></p>
        ) : (
          renderForecastsTable(forecasts)
        )
      }
    </Container>
  );
};