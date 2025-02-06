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
  console.log(props)
  return (
    <div>
      <Part label={props.parts[0].name} count={props.parts[0].exercises}/>
      <Part label={props.parts[1].name} count={props.parts[1].exercises}/>
      <Part label={props.parts[2].name} count={props.parts[2].exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const numbers = [part1.exercises, part2.exercises, part3.exercises]

  return (
    <div>
      <Header label={course} />
      <Content 
        parts={[part1, part2, part3]}
      />
      <Total
        label="Number of exercises" 
        numbers={numbers}
      />
    </div>
  )
}

export default App