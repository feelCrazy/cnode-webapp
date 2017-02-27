/**
 * Created by ming on 2017/2/24
 */
import {USER_LOGIN, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions/types';
import axios from 'axios';

export const fetchStart = (res) => ({
    type: FETCH_START,
    res
});

export const fetchSuccess = (res) => ({
    type: FETCH_SUCCESS,
    res
});

export const fetchFailure = (res) => ({
    type: FETCH_FAILURE,
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