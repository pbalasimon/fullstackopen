import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ANECDOTES = [
  { title: 'If it hurts, do it more often', votes: 0 },
  { title: 'Adding manpower to a late software project makes it later!', votes: 0 },
  { title: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
  { title: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
  { title: 'Premature optimization is the root of all evil.', votes: 0 },
  { title: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
]

const App = () => {

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(ANECDOTES);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    const randomNumber = getRandom(1, anecdotes.length - 1);
    setSelected(randomNumber);
  }

  const handleVote = () => {
    console.log(ANECDOTES);
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected].votes += 1;
    setAnecdotes(newAnecdotes);
    console.log(ANECDOTES);
  }

  const getMaxVotes = () => {
    const votes = anecdotes.map((anecdote) => anecdote.votes);
    const maxVotesValue = Math.max(...votes);
    const anecdoteMaxVoted = anecdotes.find(anecdote => anecdote.votes === maxVotesValue);
    return anecdoteMaxVoted;
  }

  return (
    <div>
      <h3>{anecdotes[selected].title}</h3>
      <br />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h5>Anecdote with most votes</h5>
      {getMaxVotes().title}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)