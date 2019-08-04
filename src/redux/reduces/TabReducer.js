import {SELECTED_TAB}  from '../constants/ActionTypes';
export default (state='', action) => {
    switch (action.type) {
        case SELECTED_TAB:
            return action.payload;
        default:
            return state;
    }
}