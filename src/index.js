import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerInUse from './reducers/index'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'

const persistedState = loadState();

const store = createStore(reducerInUse, persistedState, composeWithDevTools(
  applyMiddleware(thunk)
  ))

store.subscribe(throttle(()=> {
  saveState(store.getState());
}, 1000));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
