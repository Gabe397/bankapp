import {combineReducers} from 'redux';

const accountReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
        case 'REMOVE_PLAYER':
        default:
            return state;
    }
    
};

export default combineReducers({
    characters:characterReducer()
});


