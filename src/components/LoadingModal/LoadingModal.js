import React from 'react';
import styles from './LoadingModal.module.scss';
import Loader from 'react-loader-spinner';

const LoadingModal = ({condition, text}) => {
  return condition ? (
    <div className={styles.wraper}>
      <Loader
        type="Oval"
        color="#005CA9"
        height={50}
        width={50}
        // timeout={3000} // [sec]
      />
      <p>{text}</p>
    </div>
  ) : null;
};

export default LoadingModal;
