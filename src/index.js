import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
