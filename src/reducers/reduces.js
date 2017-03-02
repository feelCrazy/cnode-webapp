/**
 * Created by ming on 2017/2/24
 */
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';
const initialState = {isLogin: false};

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