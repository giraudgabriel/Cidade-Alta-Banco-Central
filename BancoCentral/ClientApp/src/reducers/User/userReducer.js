import {FETCH_USER, SIGN_IN, SIGN_OUT} from '../../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
        case SIGN_OUT:
        case SIGN_IN:
            return action.payload
        default:
            return state;
    }
};