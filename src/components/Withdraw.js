import React from 'react';
import { connect } from 'react-redux';
import { withdraw } from '../actions';

class Withdraw extends React.Component {
    state = { newAmt: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.withdraw(this.state.newAmt,"2");
        this.setState({ newAmt: '' })
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="withdraw">Add New Account</label>
                <input type="text" className="form-control"
                       name="newAccount"
                       value={this.state.newAmt}
                       onChange={(e) => this.setState({ newAmt: e.target.value })} />
            </form>
        );
    }
}

export default connect(null, { withdraw })(Withdraw);