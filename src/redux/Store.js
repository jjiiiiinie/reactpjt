import { createStore } from 'redux';
import subscriberReducer from './subscribers/Reducer';

const store = createStore(subscriberReducer)

export default store;