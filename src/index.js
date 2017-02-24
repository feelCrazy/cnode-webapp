import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory} from 'react-router';
import store from './store/store';
import App from './App';
import './assets/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
