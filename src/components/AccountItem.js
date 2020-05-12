import React from 'react';
import Withdraw from "./Withdraw";


const AccountItem = props => {
    return (
        <li className="list-group-item" id = {props.account._id}>
            <h4>{ props.account.name } </h4>
            Balance: { props.account.balance }
            <button type="button"
                    onClick={() => props.removeAccount(props.account)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Delete Account
            </button>

            <Withdraw account={props.account} key={props.account._id}/>

        </li>
    )
};

export default AccountItem;