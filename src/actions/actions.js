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
    ADD_ARTICLE
} from '../actions/types';
import axios from 'axios';

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

