import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
const initialState = configureStore({
  empDetails : [
      {
        name:"prasad",
        dept: "engineering"
      },
      {
        name:"prashant",
        dept: "marketing"
      }
  ],
  empInfo: {}
});
ReactDOM.render(
  <Provider store={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
