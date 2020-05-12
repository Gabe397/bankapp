import React from 'react';
import { connect } from 'react-redux';
import { deposit } from '../actions';

class Deposit extends React.Component {
    state = { newAmt: '' };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.deposit(this.state.newAmt,this.props.account);
        this.setState({ newAmt: '' })
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="deposit"></label>
                <input type="number" className="form-control"
                       name="newAccount"
                       value={this.state.newAmt}
                       onChange={(e) => this.setState({ newAmt: e.target.value })}
                       placeholder="Deposit"/>
            </form>
        );
    }
}

export default connect(null, { deposit })(Deposit);