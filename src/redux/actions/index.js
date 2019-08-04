import { SELECTED_TAB, ADD_DATA, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/ActionTypes';
import api from '../../api/index';
export const selected_tab = (tabID) => {
    return {
        type: SELECTED_TAB,
        payload: tabID
    }
}

export const add_new_element = (name) => {
    return {
        type: ADD_DATA,
        payload: { superhero: name }
    }
}

export const getData = () => {
    return {
        type: FETCHING_DATA,
    }
}
export const getDataSuccess = (data) => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
}
export const getDataFailure = () => {
    return {
        type: FETCHING_DATA_FAILURE,
    }
}
export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData());
        api().then(([response, json]) => {
            dispatch(getDataSuccess(json));
        })
        .catch((err) => console.log(err));
    }
}
