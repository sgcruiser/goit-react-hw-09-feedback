import PropTypes from 'prop-types';

import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={styles.notification}>{message}</p>;
}

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
