// import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.list}>
      {Object.keys(options).map(option => {
        return (
          <li key={option} className={styles.item}>
            <button
              type="button"
              className={styles.button}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// FeedbackOptions.propTypes = {
//   options: PropTypes.object.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
