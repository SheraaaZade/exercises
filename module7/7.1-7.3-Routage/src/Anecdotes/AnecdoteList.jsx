import { Link } from "react-router-dom";
import { Button, Flex } from "antd";

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
    <Flex gap="small" wrap="wrap">
      <Button type="primary">M me fait chié</Button>
    </Flex>
  </div>
);

export default AnecdoteList;
