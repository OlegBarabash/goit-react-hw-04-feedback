import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * feedback.good);
  };

  const onClick = e => {
    const { name } = e.target;
    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={onClick}
      />
      <Statistics
        data={feedback}
        positivePercentage={countPositiveFeedbackPercentage()}
        total={countTotalFeedback()}
      />
    </Section>
  );
};
