import propTypes from "prop-types";
import { StatTitle, StatList } from "./Statistic.styled";

const Statistic = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <StatTitle>Statistics</StatTitle>
      {total !== 0 ? (
        <StatList>
          <li>Good {good}</li>
          <li>Neutral {neutral}</li>
          <li>Bad {bad}</li>
          <li>Total {total}</li>
          <li>Positive feedback {good > 0 ? positivePercentage : "0 %"}</li>
        </StatList>
      ) : (
        <StatTitle>There is no feedback</StatTitle>
      )}
    </>
  );
};

Statistic.propTypes = {
  good: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};
export default Statistic;
