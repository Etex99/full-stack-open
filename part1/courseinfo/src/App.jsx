const Header = (props) => {
  return (
    <h1>{props.label}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.label} {props.count}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part label={props.part1label} count={props.part1count}/>
      <Part label={props.part2label} count={props.part2count}/>
      <Part label={props.part3label} count={props.part3count}/>
    </div>
  )
}

const Total = (props) => {
  let sum = 0
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
      <Content 
        part1label={part1}
        part1count={exercises1}
        part2label={part2}
        part2count={exercises2}
        part3label={part3}
        part3count={exercises3}
      />
      <Total
        label="Number of exercises" 
        numbers={[exercises1, exercises2, exercises3]}
      />
    </div>
  )
}

export default App