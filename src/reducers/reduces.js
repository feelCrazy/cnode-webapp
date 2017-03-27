/**
 * Created by ming on 2017/2/24
 */
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REQUEST_TOPICS,
    RECEIVE_TOPICS,
    REQUEST_DETAILS,
    RECEIVE_DETAILS,
    RECEIVE_USERINFO,
    REQUEST_USERINFO,
    RECEIVE_USERUPS,
    USER_ADDCOMMENT,
    PUBLISH_TOPIC
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
            if (state.page < action.page) {
                let topics = state.topics;
                action.topics.data = topics.concat(action.topics.data)
            }
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
            return {...state, isLoading: false, res: action.res, isCommented: false};
        case RECEIVE_USERUPS:
            return {
                ...state,
                SupportInfo: {replyId: action.id, index: action.index, success: action.action}
            };
        case USER_ADDCOMMENT:
            return {...state, id: action.id, isCommented: action.res.success};
        default:
            return state;
    }
};

// 添加文章
export const addArticleReduce = (state = {success: false}, action) => {
    switch (action.type) {
        case PUBLISH_TOPIC:
            return {...state, id: action.id, success: action.success};
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

// 评论

