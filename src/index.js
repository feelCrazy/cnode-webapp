import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import store from './store/store';
import App from './App';
import Home from './containers/HomePage';
import Login  from './containers/Login';
import HotPage from './containers/HotPage';
import Article from './containers/Article';
import './assets/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={App}>
                <IndexRoute components={Home}/>
                <Route path="login" components={Login}/>
                <Route path="article/:id" components={Article}/>
                <Route path="hot" component={HotPage}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);
