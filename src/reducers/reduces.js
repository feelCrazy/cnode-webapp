/**
 * Created by ming on 2017/2/24
 */
import {FETCH_FAILURE, FETCH_SUCCESS, FETCH_START} from '../actions/types';
const initialState = {isLogin: false};

export const userReduce = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {isLogin: true, res: action.res};
        case FETCH_SUCCESS:
            return {...state, isLogin: true, res: action.res};
        case FETCH_FAILURE:
            return {...state, isLogin: false, res: action.res};
        default:
            return state;
    }
};