import { createSelector } from '@reduxjs/toolkit';

const getfeedback = state => state.feedback;
const getGood = state => state.feedback.good;
const getNeutral = state => state.feedback.neutral;
const getBad = state => state.feedback.bad;

const countTotalFeedback = createSelector(
  [getfeedback],

  feedback => {
    return Object.keys(feedback).reduce(
      (acc, value) => acc + feedback[value],
      0,
    );
  },
);

const countPositiveFeedbackPercentage = createSelector(
  [getGood, countTotalFeedback],
  (good, total) => {
    const percentageFeedback =
      countTotalFeedback() === 0
        ? 0
        : Math.round((good / countTotalFeedback()) * 100);
    return percentageFeedback;
  },
);

// eslint-disable-next-line
export default {
  getfeedback,
  getGood,
  getNeutral,
  getBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
};
