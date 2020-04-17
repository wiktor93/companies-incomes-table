import React from 'react';
import styles from './ErrorModal.module.scss';

const ErrorModal = ({condition}) => {
  return condition ? (
    <div className={styles.wraper}>
      <p>Sorry, an error occurred. Please try again later.</p>
    </div>
  ) : null;
};

export default ErrorModal;
