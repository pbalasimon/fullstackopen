import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const App = () => {
  const part1 = { name: 'Fundamentals of React', exercise: 10 };
  const part2 = { name: 'Using props to pass data', exercise: 7 };
  const part3 = { name: 'State of a component', exercise: 14 };
  const course = {
    name: 'Half Stack application development',
    parts: [
      part1, part2, part3
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))