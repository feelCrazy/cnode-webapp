/**
 * Created by ming on 2017/2/24
 */
import {USER_LOGIN} from '../actions/types';
const initialState = {isLogin: false};

export const userReduce = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {...state, isLogin: action.obj};
        default:
            return state;
    }
};