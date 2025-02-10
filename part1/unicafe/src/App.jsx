import { useState } from 'react'

const Button = ({onClick, label}) => <button onClick={onClick}>{label}</button>

const Display = ({label, value}) => <p>{`${label} ${value}`}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} label="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} label="neutral"/>
      <Button onClick={() => setBad(bad + 1)} label="bad"/>
      <h1>statistics</h1>
      <Display label="good" value={good}/>
      <Display label="neutral" value={neutral}/>
      <Display label="bad" value={bad}/>
    </div>
  )
}

export default App