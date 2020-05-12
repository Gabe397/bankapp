import React from 'react';
import { connect } from 'react-redux';
import {removeAccount} from '../actions';
import {withdraw} from '../actions';

import AccountItem from "./AccountItem";


class AccountList extends React.Component {


    removeAccount = (account) => {
        this.props.removeAccount(account._id);
    };

    withdraw = (account) => {
        this.props.withdraw(account._id);
    };


    render() {
        const AccountItems = this.props.accounts.map(account => {
            return <AccountItem account={account} key={account._id} removeAccount={this.removeAccount} withdraw = {this.withdraw}/>
        });

        return (
            <ul className="task-list list-group">
                { AccountItems }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    };
};

export default connect(mapStateToProps,{ removeAccount,withdraw })(AccountList);