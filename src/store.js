import { createStore } from 'redux';
import rootReducer from './reducers/rootreducer';

export default function configureStore(store) {
 return createStore(
  rootReducer,
  {simplereducer:store}
 );
}