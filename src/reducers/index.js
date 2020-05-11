import { combineReducers } from 'redux';

import accountsReducer from './accountsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    accounts: accountsReducer,
    errors: errorReducer
});


