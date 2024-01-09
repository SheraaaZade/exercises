import Part from "../Part/Part";

const Course = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} number={part.exercises} />
      ))}
    </ul>
  );
};

export default Course;
