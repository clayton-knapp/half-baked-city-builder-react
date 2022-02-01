import { useState } from 'react';
import './App.css';
// import SkylineDropdown from './SkylineDropdown';
// import WaterfrontDropdown from './WaterfrontDropdown';
// import CastleDropdown from './CastleDropdown';
import Form from './Form.js';
import Display from './Display';
import PastCities from './PastCities';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  // you'll need to track a city name, which starts as the city name of your choice.
  const [cityName, setCityName] = useState('AnyTownUSA');
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [slogans, setSlogans] = useState(['The city that forced me to quit being an Artist and become a coder', 'Man, the weather sucks here from October-April']);

//STRETCH - passed cities
  const [citiesArray, setCitiesArray] = useState([]);


  //STRETCH: Single Dropdown Component
  const skylineOptionNames = ['Pink', 'Busy', 'Foggy'];
  const waterfrontOptionNames = ['Dock', 'Sunset', 'Boats'];
  const castleOptionNames = ['Serious', 'Mysterious', 'Regal'];

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <Display 
        skylineId = {skylineId}
        waterfrontId = {waterfrontId}
        castleId = {castleId}
        cityName = {cityName}
      />
      <Form 
        setCityName={setCityName}
        setSkylineId={setSkylineId}
        skylineOptionNames={skylineOptionNames}
        setWaterfrontId={setWaterfrontId}
        waterfrontOptionNames={waterfrontOptionNames}
        setCastleId={setCastleId}
        castleOptionNames={castleOptionNames}
        slogans={slogans}
        setSlogans={setSlogans}
      />
      <PastCities 
        citiesArray = {citiesArray}
        setCitiesArray = {setCitiesArray}
        skylineId = {skylineId}
        waterfrontId = {waterfrontId}
        castleId = {castleId}
        cityName = {cityName}
        slogans= {slogans}
        setCityName={setCityName}
        setSlogans={setSlogans}
      />
    </div>
  );
}

export default App;
