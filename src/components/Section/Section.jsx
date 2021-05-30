import PropTypes from 'prop-types';

import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <span className={styles.title}>{title}</span>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
