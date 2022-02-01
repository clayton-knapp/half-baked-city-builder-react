import { useState } from 'react';

export default function SloganForm({ slogans, setSlogans }) {
  // React forms are a pain! 
  // Track the sloganInput form state with a useState hook
  const [sloganInput, setSloganInput] = useState('');
    
  function handleSubmit(e) {
    e.preventDefault();

    // This component takes in a prop called setSlogans, which is a function that takes in an array of slogans. 
    // Also, this component also takes in a prop called slogans, which is an array of strings. //// On submit call the setSlogans state with a new array that is a copy of the old array with the new slogan immutably added to the end 
    setSlogans([...slogans, sloganInput]);

    // set the sloganInput form state to an empty string to reset the form
    // e.target.reset(); - dont do it like this b/c it is like DOM manip (no no in React)
    setSloganInput(''); // sets the sloganInput to '' and THEN when re-displays input you make sure to set the value=sloganInput

  }

  function handleChange(e) {
    //stores the current state of the form on every change
    setSloganInput(e.target.value);
  }

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input required
          onChange={handleChange}
          value={sloganInput} // works in tandem with initializing the input after submit
        />
        <button>Submit</button>
      </form>
    </section>
  );
}
