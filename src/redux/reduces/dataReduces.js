import { ADD_DATA, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/ActionTypes';
const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:

            return {
                ...state,
                data: [],
                isFetching: true,
                error: false
            }
        case FETCHING_DATA_SUCCESS:

            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                data: [],
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
}