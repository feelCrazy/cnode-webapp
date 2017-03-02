/**
 * Created by ming on 2017/2/24
 */
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import createLogger from 'redux-logger'
export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)