const accountsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNT':
            return action.payload;
        case 'ADD_ACCOUNT':
            return [
                ...state,
                { name: action.payload, _id: state.length + 1 }
            ];
        case 'DELETE_ACCOUNT':
            const accountIndex = state.findIndex(t => t.id === action.payload);
            let accountList = [ ...state ];
            accountList.splice(accountIndex, 1);
            return accountList;

        default:
            return state;

    }
};

export default accountsReducer;