import data from '../../data/data';
//export default () => data;
/**
 * valor pr defecto es data
 */
import { ADD_DATA } from '../constants/ActionTypes';
export default (state = data, action) => {
    switch (action.type) {
        case ADD_DATA:
            //añade un elemento mas 
            return [...state, action.payload];
        default:
            return state;
    }
}