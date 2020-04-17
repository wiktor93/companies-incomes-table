import React from 'react';
import styles from './LoadingModal.module.scss';
import Loader from 'react-loader-spinner';

const LoadingModal = ({condition}) => {
  return condition ? (
    <div className={styles.wraper}>
      <div>
        <Loader
          type="Oval"
          color="#005CA9"
          height={100}
          width={100}
          timeout={3000} // [sec]
        />
      </div>
    </div>
  ) : null;
};

export default LoadingModal;
