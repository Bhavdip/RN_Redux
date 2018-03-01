/** Reducers are the ones in charge of updating the state of the app */
import {
    DATA_AVAILABLE
} from '../actions/index';

import {
    combineReducers
} from 'redux'

let dataState = {
    data: [],
    loading: true
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            {
                state = Object.assign({}, state, {
                    data: [],
                    loading: false
                });
                return state;
            }
    }
    return state;
}

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;