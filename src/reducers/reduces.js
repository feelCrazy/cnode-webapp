/**
 * Created by ming on 2017/2/24
 */
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REQUEST_TOPICS,
    RECEIVE_TOPICS,
    START_ADD_ARTICLE,
    ADD_ARTICLE,
    REQUEST_DETAILS,
    RECEIVE_DETAILS,
    RECEIVE_USERINFO,
    REQUEST_USERINFO,
} from '../actions/types';
const initialState = {isLogin: false};

// 用户登录
export const userReduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {isLogin: true, res: action.res};
        case LOGIN_SUCCESS:
            return {...state, isLogin: true, res: action.res};
        case LOGIN_FAILURE:
            return {...state, isLogin: false, res: action.res};
        default:
            return state;
    }
};

// 文章
export const articleReduce = (state = {isFetch: false, page: 0, topics: []}, action) => {
    switch (action.type) {
        case REQUEST_TOPICS:
            return {...state, isFetch: true, tab: action.name};
        case RECEIVE_TOPICS:
            /* if (state.page < action.page) {
             let topics = state.topics;
             action.topics = topics.concat(action.topics.data)
             }*/
            return {
                ...state,
                isFetch: false,
                page: action.page,
                topics: action.topics.data,
                limit: action.limit
            };
        default:
            return state;
    }
};

//文章详情
export const articleDetailsReduce = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case REQUEST_DETAILS:
            return {...state, isLoading: true};
        case RECEIVE_DETAILS:
            return {...state, isLoading: false, res: action.res};
        default:
            return state;
    }
};

// 添加文章
export const addArticleReduce = (state = {isAdd: false}, action) => {
    switch (action.type) {
        case START_ADD_ARTICLE:
            return {...state, isAdd: true};
        case ADD_ARTICLE:
            return {...state, isAdd: false, res: action.pram};
        default:
            return state;
    }
};

// 作者详情
export const authorReduce = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case REQUEST_USERINFO:
            return {...state, isLoading: true};
        case RECEIVE_USERINFO:
            return {...state, isLoading: false, res: action.res};
        default:
            return state;
    }
};
