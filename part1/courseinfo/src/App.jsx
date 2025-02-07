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
      <Part label={props.parts[0].name} count={props.parts[0].exercises} />
      <Part label={props.parts[1].name} count={props.parts[1].exercises} />
      <Part label={props.parts[2].name} count={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.numbers.map((item) => {
    sum += item
  });

  return (
    <p>{props.label} {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let exercises = course.parts.map((item) => item.exercises)

  return (
    <div>
      <Header label={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        label="Number of exercises"
        numbers={exercises}
      />
    </div>
  )
}

export default App