const Course = ({ course }) => {
  const total = course.parts.reduce((accumulator, current) => accumulator + current.exercises, 0)

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
  <ul>
    {parts.map(item => <Part key={item.id} name={item.name} exercises={item.exercises} />)}
  </ul>
)

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ total }) => <p>Number of exercises {total}</p>

export default Course