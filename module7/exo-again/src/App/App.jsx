import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import {
  Routes,
  Route,
  Navigate,
  useMatch,
  useNavigate,
} from "react-router-dom";
import Menu from "../Menu/Menu";
import About from "../About/About";
import AnecdoteList from "../Anecdote/AnecdoteList";
import Anecdote from "../Anecdote/Anecdote";
import CreateAnecdote from "../Create/CreateAnecdote";
import Notification from "../Notification/Notification";

/**
 * npm install react-router-dom
 */

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  const clearNotificationWithDelay = (_) => {
    setTimeout(() => setNotification(""), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);

  const addNew = (anecdote) => { 
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`a new anecdote ${anecdote.content} created !`);
    navigate("/");
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const user = true;
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <Notification notification={notification} />}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/create" element={<CreateNew addNew={addNew} />} /> */}
        <Route
          path="/create"
          element={
            user ? (
              <CreateAnecdote addNew={addNew} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
/**
 * https://fullstackopen.com/en/part7/react_router#exercises-7-1-7-3
 * si BOUTON login
 * 
 * <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
 * 
 * 
 *  {user
 *   ? <em>{user} logged in</em>
 *   : <Link style={padding} to="/login">login</Link>    
 *  }
 * 
 * import {
  // ...
  useNavigate} from 'react-router-dom'

    const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')  }  

    
 */

export default App;
