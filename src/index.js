import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reducer from './store';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// StrictMode 검사 도구 두번이 실행됨
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
