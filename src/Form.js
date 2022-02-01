import React from 'react';
import CityNameInput from './CityNameInput';
import Dropdown from './Dropdown';
import SloganForm from './SloganForm';
import SloganList from './SloganList';
import './App.css';

export default function Form({ setCityName, setSkylineId, skylineOptionNames, setWaterfrontId, waterfrontOptionNames, setCastleId, castleOptionNames, slogans, setSlogans }) {
  return <div className='bottom'>
    {/* here, the CityNameInput component takes in the setCityName state handler function */}
    <CityNameInput 
      setCityName={setCityName}
    />
    <section className='dropdowns'>
      {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
      {/* <SkylineDropdown 
            setSkylineId = {setSkylineId}
          />
          <WaterfrontDropdown 
            setWaterfrontId = {setWaterfrontId}
          />
          <CastleDropdown 
            setCastleId = {setCastleId}
          /> */}
      {/* STRETCH: Single Dropdown */}
      <Dropdown 
        category = 'Skyline'
        setId = {setSkylineId}
        optionNames = {skylineOptionNames}
      />
      <Dropdown 
        category = 'Waterfront'
        setId = {setWaterfrontId}
        optionNames = {waterfrontOptionNames}
      />
      <Dropdown 
        category = 'Castle'
        setId = {setCastleId}
        optionNames = {castleOptionNames}
      />
    </section>
    {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
    <SloganForm 
      slogans={slogans}
      setSlogans={setSlogans}
    />
    {/* here, the SloganList component takes the array of slogans that lives in state */}
    <SloganList
      slogans={slogans}
    />

  </div>;
}
