/**
 * Created by ming on 2017/2/24
 */
import {USER_LOGIN} from '../actions/types';

export const userLogin = (obj) => ({
    type: USER_LOGIN,
    obj
});