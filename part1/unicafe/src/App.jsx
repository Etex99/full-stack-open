import { useState } from 'react'

const Button = ({onClick, label}) => <button onClick={onClick}>{label}</button>

const Display = ({label, value}) => <p>{`${label} ${value}`}</p>

const CalculatedStats = ({good, bad, total}) => {

  const feedbackAverage = () => (good + bad * -1) / total
  const percentagePositive = () => good / total * 100

  if (total === 0) {
    return (
      <p>give feedback to calculate rating average and percentage of positive ratings</p>
    )
  }

  return (
    <>
      <Display label="average" value={feedbackAverage()}/>
      <Display label="positive" value={`${percentagePositive()} %`}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const giveFeedback = (feedback) => {
    switch (feedback) {
      case 1:
        setGood(good + 1)
        break;
      case 0:
        setNeutral(neutral + 1)
        break;
      case -1:
        setBad(bad + 1)
        break;
      default:
        return
    }
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => giveFeedback(1)} label="good"/>
      <Button onClick={() => giveFeedback(0)} label="neutral"/>
      <Button onClick={() => giveFeedback(-1)} label="bad"/>
      <h1>statistics</h1>
      <Display label="good" value={good}/>
      <Display label="neutral" value={neutral}/>
      <Display label="bad" value={bad}/>
      <Display label="all" value={total}/>
      <CalculatedStats good={good} bad={bad} total={total}/>
    </div>
  )
}

export default App