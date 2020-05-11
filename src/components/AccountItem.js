import React from 'react';


const AccountItem = props => {
    return (
        <li className="list-group-item">
            { props.account.name }
            <button type="button"
                    onClick={() => props.removeAccount(props.account)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Done
            </button>
        </li>
    )
};

export default AccountItem;