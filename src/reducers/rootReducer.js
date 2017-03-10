/**
 * Created by ming on 2017/2/24
 */
import {combineReducers} from 'redux';
import {
    userReduce,
    articleReduce,
    addArticleReduce,
    articleDetailsReduce,
    authorReduce
} from '../reducers/reduces';

export default combineReducers({
    userReduce,
    articleReduce,
    addArticleReduce,
    articleDetailsReduce,
    authorReduce
})