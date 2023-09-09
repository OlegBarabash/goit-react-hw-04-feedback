import PropTypes from 'prop-types';

import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  data: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      )}
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
