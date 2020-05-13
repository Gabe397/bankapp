import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AccountList from "./AcountList";
import AddAccount from "./AddAccount";
import { setAccounts, accountError } from "../actions";


class App extends React.Component {


    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.accountError();
        });
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="container">
                <AddAccount />
                <AccountList />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.getAccounts
    };
};

export default connect(mapStateToProps, { setAccounts, accountError })(App);