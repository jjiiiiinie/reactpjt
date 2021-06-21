import { createStore } from 'redux';
import subscriberReducer from './subscribers/Action';

const store = createStore(subscriberReducer)

export default store;