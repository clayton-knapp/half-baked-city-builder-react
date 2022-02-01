import React from 'react';
import './App.css';
import SloganList from './SloganList';

export default function DisplaySmallCity({ skylineId, waterfrontId, castleId, cityName, slogans }) {
  return <div className='small-city'>
    <h3>{cityName}</h3>
    <div className='small-pics'>
      <img className='pic' src={`waterfront-${waterfrontId}.jpeg`} />
      <img className='pic' src={`skyline-${skylineId}.jpeg`} />
      <img className='pic' src={`castle-${castleId}.jpeg`} />
    </div>
    <SloganList 
      slogans = {slogans}
    />
  </div>;
}
