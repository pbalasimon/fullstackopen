import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics.js';
import Button from './Button.js';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" handleClick={() => setGood(good + 1)}></Button>
        <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)}></Button>
        <Button text="Bad" handleClick={() => setBad(bad + 1)}></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));

