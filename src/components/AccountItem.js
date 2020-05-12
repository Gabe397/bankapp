import React from 'react';


const AccountItem = props => {
    return (
        <li className="list-group-item">
            <h4>{ props.account.name } </h4>
            Balance: { props.account.balance }

            <button type="button"
                    onClick={() => props.removeAccount(props.account)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Remove Account
            </button>


        </li>
    )
};

export default AccountItem;