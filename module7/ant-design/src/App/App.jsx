import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import AnecdoteList from "../Anecdotes/AnecdoteList";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import Menu from "../Menu/Menu";
import About from "../About/About";
import CreateNew from "../Anecdotes/CreateNew";
import { useEffect, useState } from "react";
import ViewOne from "../Anecdotes/ViewOne";
import { Layout, message } from "antd";

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
  const { Header, Footer: AntdFooter, Content } = Layout;

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`a new anecdote ${anecdote.content} created !`);
    navigate("/");
  };

  const clearNotificationWithDelay = (_) => {
    setTimeout(() => setNotification(""), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : undefined;

  return (
    <div>
      <Header>
        <h1 style={{ color: "white" }}>Software anecdotes</h1>
      </Header>

      <Content style={{ padding: "10px 60px" }}>
        <Menu />
        {notification && <Notification notification={notification} />}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route
            path="/anecdotes/:id"
            element={<ViewOne {...{ anecdote }} />}
          />
        </Routes>
      </Content>
      <AntdFooter>
        <Footer />
      </AntdFooter>
    </div>
  );
};

export default App;
