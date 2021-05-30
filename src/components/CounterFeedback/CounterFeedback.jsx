// import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import feedbackSelectors from '../../redux/feedback/feedback-selectors';
import * as actions from '../../redux/feedback/feedback-actions';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

import styles from './CounterFeedback.module.css';

export default function CounterFeedback() {
  const feedback = useSelector(feedbackSelectors.countTotalFeedback);
  const dispatch = useDispatch();

  const onLeaveFeedback = useCallback(
    event => {
      dispatch(actions.onLeaveFeedback(event.target.textContent));
    },
    [dispatch],
  );

  return (
    <div className={styles.counter}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {Object.values(feedback).every(value => value === 0) ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={feedbackSelectors.countTotalFeedback}
            positivePercentage={
              feedbackSelectors.countPositiveFeedbackPercentage
            }
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
