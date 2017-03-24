import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory,} from 'react-router';
import store from './store/store';

import './assets/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import route from './route';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={route}>
        </Router>
    </Provider>, document.getElementById('root')
);
