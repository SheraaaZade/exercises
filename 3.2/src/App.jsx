import Course from "./components/Course/Course";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Header course={course.name}/>
      <Course key={course.id} parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
