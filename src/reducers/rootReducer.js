/**
 * Created by ming on 2017/2/24
 */
import {combineReducers} from 'redux';
import {userReduce, articleReduce} from '../reducers/reduces';

export default combineReducers({
    userReduce,
    articleReduce
})