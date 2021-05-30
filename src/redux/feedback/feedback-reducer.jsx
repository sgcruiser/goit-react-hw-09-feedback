import { createReducer } from '@reduxjs/toolkit';
import { onLeaveFeedback } from './feedback-actions';

const feedbackInitialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackReducer = createReducer(feedbackInitialState, {
  [onLeaveFeedback]: (state, { payload }) =>
    void {
      ...state,
      [payload]: (state[payload] += 1),
    },
});

export default feedbackReducer;
