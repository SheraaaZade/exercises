import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (!all) return <p>No feedback given</p>;

  const average = all !== 0 ? (good - bad) / all : 0;
  const positive = all !== 0 ? (good / all) * 100 : 0;

  return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
  );
};

export default Statistics;
