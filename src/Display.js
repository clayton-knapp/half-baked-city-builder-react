import React from 'react';
import City from './City.js';

export default function Display({ skylineId, waterfrontId, castleId, cityName }) {
  return <div className='App'>
    {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
    <City 
      skylineId = {skylineId}
      waterfrontId = {waterfrontId}
      castleId = {castleId}
    />
    <h1>
      {/* dynamically update the city name here using state */}
        Welcome to beautiful {cityName}!
    </h1>
  </div>;
}
