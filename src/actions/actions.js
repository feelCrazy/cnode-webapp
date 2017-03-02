/**
 * Created by ming on 2017/2/24
 */
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';
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

export const userLogin = (key) => {
    return dispatch => {
        dispatch(fetchStart());
        return axios.post('/accesstoken', {
            accesstoken: key
        })
            .then(res => {
                console.log(res);
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchFailure(err.data))
            })

    }
};

export const getTopics = (name, nmb) => {
    return dispatch => {


    }
};