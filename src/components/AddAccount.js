import React from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions';

class AddAccount extends React.Component {
    state = { newAccount: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.newAccount);
        this.setState({ newAccount: '' })
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="newTask">Enter New Task</label>
                <input type="text" className="form-control"
                       name="newTask"
                       value={this.state.newTask}
                       onChange={(e) => this.setState({ newTask: e.target.value })} />
            </form>
        );
    }
}

export default connect(null, { AddAccount })(AddAccount);