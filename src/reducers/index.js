import { combineReducers } from 'redux';
import axios from 'axios';

const DEFAULT_STATE = {
    accounts:[],
    error:''
};


function getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {DEFAULT_STATE['accounts'] = response.data}).catch(error => {DEFAULT_STATE.error = error.message});

}

function dataDidMount(){
    getData();
}

dataDidMount();


const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'ADD_ACCOUNT':
            let newState = {
                accounts: [ ...state.accounts ],
                error:''
            };
            action.payload.id = state.accounts.length + 1;
            newState.accounts.push(action.payload);
            return newState;

        default:
            return state;
    }
    };

export default combineReducers({
    accounts: accountReducer

});


