import React from 'react';
import Subscribers from '../../Subscribers';
import styles from './ReduxSample.module.css';

const ReduxSample = () => {
  return(
    <div className={styles.reduxContainer}>
      <Subscribers />
    </div>
  );
}

export default ReduxSample;