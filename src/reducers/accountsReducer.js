const accountsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNT':
            return action.payload;
        case 'ADD_ACCOUNT':
            return [
                ...state,
                { name: action.payload, _id: state.length + 1,balance:100.00 }
            ];
        case 'DELETE_ACCOUNT':
            const accountIndex = state.findIndex(t => t._id === action.payload);
            let accountList = [ ...state ];
            accountList.splice(accountIndex, 1);
            return accountList;

        case 'WITHDRAW':
            const aIndex = action.payload;
            let aList = [ ...state ];
            console.log(aList);
            console.log(aIndex);
            return aList;

        default:
            return state;

    }
};

export default accountsReducer;