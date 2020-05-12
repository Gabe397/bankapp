export const setAccounts = accounts => {
    return {
        type: 'SET_ACCOUNT',
        payload: accounts
    }
};

export const addAccount = (text) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: text
    }
}

export const withdraw = (amount,p2) => {
    return {
        type: 'WITHDRAW',
        payload: amount,
        payload2:p2

    }
};

export const deposit = (amount,p2) => {
    return {
        type: 'DEPOSIT',
        payload: amount,
        payload2:p2

    }
}
export const removeAccount = (accountId) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: accountId,
    }
}



export const accountError = errorMessage => {
    return {
        type: 'ACCOUNT_ERROR'
    }
};