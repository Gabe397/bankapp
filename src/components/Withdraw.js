import React from 'react';
import { connect } from 'react-redux';
import { withdraw } from '../actions';

class Withdraw extends React.Component {
    state = { newAmt: '' };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.withdraw(this.state.newAmt,this.props.account);
        this.setState({ newAmt: '' })
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="withdraw"></label>
                <input type="number" className="form-control"
                       name="newAccount"
                       value={this.state.newAmt}
                       onChange={(e) => this.setState({ newAmt: e.target.value })}
                       placeholder="Withdraw"/>
            </form>
        );
    }
}

export default connect(null, { withdraw })(Withdraw);