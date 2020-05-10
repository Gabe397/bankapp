import React from 'react';
import { connect } from 'react-redux';

class AccountList extends React.Component {

    renderList() {
        let accountList = this.props.accounts;

        console.log(accountList);
        return accountList.map((acc, index) => {
            return (
                <li className="list-group-item" key={index}>
                    { acc.name }
                    <button type="button" className="btn btn-danger pull-right">
                        Delete
                    </button>
                </li>
            );
        });
    }


    render() {
        const AccountList = this.renderList();

        return (
            <div className="card">
                <h3>Team List</h3>
                <ul className="list-group">
                    { AccountList }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    };
};

export default connect(mapStateToProps)(AccountList);