import React from 'react';

export default function Dropdown({ setId, optionNames, category }) {

  function handleChange(e) {
    setId(e.target.value);
  }


  return <div>
    Select a {category}
    <select onChange={handleChange}>
      {
        optionNames.map((name, i) => 
          <option 
            key={name + i}
            value={i + 1} //must set each value to i+1 as images start on 1 not 0
          >{name}</option>
        )
      }
    </select>

  </div>;
}
