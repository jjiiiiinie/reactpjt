import React from 'react';
import styles from './Subscribers.module.css';

import { connect } from 'react-redux';
import { addSubscriber, removeSubscriber } from '../redux/subscribers/Action';

const Subscribers = ({count, addSubscriber, removeSubscriber}) => {
  return(
    <div className={styles.items}>
      <h2>구독자수 : {count}</h2>
      <button onClick={()=>addSubscriber()}>구독하기</button>
      <button onClick={()=>removeSubscriber()}>구독취소</button>
    </div>
  );
}

const mapStatetoProps = ( state ) => {
  return {
    count : state.count
  }
}

const mapDispatchToProps = {
  addSubscriber,
  removeSubscriber:removeSubscriber
}

export default connect( mapStatetoProps, mapDispatchToProps )( Subscribers )