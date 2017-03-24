/**
 * Created by ming on 2017/2/24
 */
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    RECEIVE_TOPICS,
    REQUEST_TOPICS,
    START_ADD_ARTICLE,
    ADD_ARTICLE,
    REQUEST_DETAILS,
    RECEIVE_DETAILS,
    RECEIVE_USERINFO,
    REQUEST_USERINFO,
    RECEIVE_USERUPS,
    USER_ADDCOMMENT,
} from '../actions/types';
import axios from 'axios';
// accesstoken: '199183d1-b722-4cc4-bdaa-5443b964f84c',
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const fetchStart = (res) => ({
    type: LOGIN_START,
    res
});

export const fetchSuccess = (res) => ({
    type: LOGIN_SUCCESS,
    res
});

export const fetchFailure = (res) => ({
    type: LOGIN_FAILURE,
    res
});

export const requestTopics = (name) => ({
    type: REQUEST_TOPICS,
    name
});

export const receiveTopics = (name, topics, page, limit) => ({
    type: RECEIVE_TOPICS,
    name,
    topics,
    page,
    limit
});

export const startAddArticle = (name) => ({
    type: START_ADD_ARTICLE,
    name
});

export const addArticle = (pram) => ({
    type: ADD_ARTICLE,
    pram
});

export const requestDetails = (id) => ({
    type: REQUEST_DETAILS,
    id
});

export const receiveDetails = (res) => ({
    type: RECEIVE_DETAILS,
    res
});

export const requestUserInfo = (name) => ({
    type: REQUEST_USERINFO,
    name
});

export const receiveUserInfo = (res) => ({
    type: RECEIVE_USERINFO,
    res
});

export const receiveUps = (id, index, action) => ({
    type: RECEIVE_USERUPS,
    id,
    index,
    action
});

export const addComment = (id, res) => ({
    type: USER_ADDCOMMENT,
    id,
    res
});

// 检查token
export const userLogin = (key) => {
    return dispatch => {
        dispatch(fetchStart());
        return axios.post('/accesstoken', {
            accesstoken: key
        })
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchFailure(err.data))
            })
    }
};

// 获取帖子
export const getArticle = (name, page = 1, limit = 20,) => {
    return dispatch => {
        dispatch(requestTopics(name));
        axios.get(`/topics?tab=${name}&page=${page}&limit=${limit}`)
            .then(res => {
                console.log(res);
                dispatch(receiveTopics(name, res.data, page, limit))
            })
            .catch(err => {
                console.log(err);
            })
    }
};

// 帖子详情
export const getDetails = (id) => {
    return dispatch => {
        dispatch(requestDetails(id));
        axios.get('/topic/' + id)
            .then(res => {
                console.log(res);
                dispatch(receiveDetails(res.data));
            })
            .catch(err => {
                console.log(err)
            })
    }
};

// 获取用户信息
export const getUserInfo = (name) => {
    return dispatch => {
        dispatch(requestUserInfo(name));
        axios.get('/user/' + name)
            .then(res => {
                console.log(res);
                dispatch(receiveUserInfo(res.data))
            })
            .catch(err => {
                console.log(err);
            })

    }

};

// 添加帖子
export const userAddArticle = (pram) => {
    return dispatch => {
        dispatch(startAddArticle());
        axios.post('/topics/update', pram)
            .then(res => {
                console.log(res);
                dispatch(addArticle(res.data))
            })
            .catch(err => console.log(err))
    }
};

// 点赞
export const userClcikUps = (id, accesstoken, index) => {
    return dispatch => {
        axios.post('/reply/' + id + '/ups', {
            accesstoken: accesstoken
        }).then(res => {
            console.log(res);
            dispatch(receiveUps(id, index, res.data))
        })
    }
};


// 新建评论
export const UserAddComment = (id, accesstoken, reply) => {
    return dispatch => {
        axios.post('/topic/' + id + '/replies', {
            content: reply,
            accesstoken: accesstoken
        }).then(res => {
            console.log(res);
            dispatch(addComment(id, res.data))
        })
    }
};

