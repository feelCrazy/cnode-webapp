/**
 * Created by ming on 2017/3/24
 */

import React from 'react';
import {Route, IndexRoute}  from 'react-router';
import App from './App';

/*
 * 代码分拆
 * */
const homeScreen = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/HomePage').default);

    }, 'HomeScreen');
};

const loginScreen = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Login').default);
    }, 'Index');
};
const articleScreen = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Article').default);
    }, 'Index');
};
const aboutScreen = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/About').default);
    }, 'Index');
};
const newScreen = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/NewTopics').default);
    }, 'Index');
};

const isLogin = (nextState, replace) => {
    const info = JSON.parse(window.localStorage.getItem("userAcc"));
    if (!info) {
        replace('/')
    }
};


const route = (
    <Route path="/" components={App}>
        <IndexRoute getComponent={homeScreen}/>
        <Route path="login" getComponent={loginScreen}/>
        <Route path="article/:id" getComponent={articleScreen}/>
        <Route path="/:tab" getComponent={homeScreen}/>
        <Route path="/about/me" getComponent={aboutScreen}/>
        <Route path="/new/topics" getComponent={newScreen} onEnter={isLogin}/>
    </Route>
);
export default route;
