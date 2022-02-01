import React from 'react';
import DisplaySmallCity from './DisplaySmallCity';

export default function PastCities({ citiesArray, setCitiesArray, cityName, skylineId, waterfrontId, castleId, slogans }) {

  function handleClick() {
    setCitiesArray([...citiesArray, 
      {
        name: cityName,
        skylineId: skylineId,
        waterfrontId: waterfrontId,
        castleId: castleId,
        slogans: slogans
      }]);

    //reset form inputs - how to do this when inputs are tracked locally in their components and this is a different component?

  }

  return <div>
    <button onClick={handleClick}>
      Add Current City to Past Cities Array
    </button>
    <div className='past-cities'>
      {
        citiesArray.map((city, i) =>
          <DisplaySmallCity
            key = {city + i}
            skylineId = {city.skylineId}
            waterfrontId = {city.waterfrontId}
            castleId = {city.castleId}
            cityName = {city.name}
            slogans = {city.slogans}
          />
        )
      }
    </div>

  </div>;
}
