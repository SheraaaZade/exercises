import { useParams } from "react-router-dom";

const Anecdote = ({ anecdote }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>{anecdote.content} </p>
      <p>{anecdote.author}</p>
      <p>{anecdote.info}</p>
      <p>Vote : {anecdote.vote !== undefined ? anecdote.vote : 1}</p>
    </div>
  );
};

export default Anecdote;
