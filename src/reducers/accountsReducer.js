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
            console.log(action.payload);
            console.log(action.payload2._id);

            let bal = action.payload2.balance;
            let remaining = bal - action.payload;

            const acIndex = (action.payload2._id - 1);
            let acList = [ ...state ];

            state[acIndex].balance = remaining;
            console.log(state[acIndex].balance);

            return acList;

        case 'DEPOSIT':
            console.log(action.payload);
            console.log(action.payload2._id);

            let bala = action.payload2.balance;
            let total = parseInt(bala) + parseInt(action.payload);

            const accIndex = (action.payload2._id - 1);
            let accList = [ ...state ];

            state[accIndex].balance = total;
            console.log(state[accIndex].balance);

            return accList;



        default:
            return state;

    }
};

export default accountsReducer;