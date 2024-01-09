import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";
import Statistics from "components/Statistics/Statistics";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  if (loading) return <Loading />;

  const handleClick = (e) => {
    switch (e.target.className) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleClick} text="good" />
      <Button onClick={handleClick} text="neutral" />
      <Button onClick={handleClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
};

export default App;
