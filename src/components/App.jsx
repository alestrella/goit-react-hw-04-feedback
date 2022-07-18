import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import Box from './Box';
import { iconOptions } from './Icons/iconOptions.js';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = ({ label }) => {
    switch (label) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    total && Math.round((good / total) * 100);
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Box
      width="50%"
      my={0}
      mx="auto"
      minHeight="400px"
      borderRadius="middle"
      bg="white"
      as="main"
    >
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={iconOptions}
          onLeaveFeedback={addFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </Box>
  );
};

export default App;
