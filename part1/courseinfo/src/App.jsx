const Header = (props) => {
  return (
    <h1>{props.label}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.label} {props.count}</p>
  )
}

const Total = (props) => {
  var sum = 0
  props.numbers.forEach((item) => {
    sum += item
  });

  return (
    <p>{props.label} {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header label={course} />
      <Content label={part1} count={exercises1} />
      <Content label={part2} count={exercises2} />
      <Content label={part3} count={exercises3} />
      <Total
        label="Number of exercises" 
        numbers={[exercises1, exercises2, exercises3]}
      />
    </div>
  )
}

export default App