import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools());
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
