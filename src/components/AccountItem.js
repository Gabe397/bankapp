import React from 'react';


const AccountItem = props => {
    return (
        <li className="list-group-item" id = {props.account._id}>
            <h4>{ props.account.name } </h4>
            Balance: { props.account.balance }
            <button type="button"
                    onClick={() => props.removeAccount(props.account)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Done
            </button>

            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" style={{ float: 'right' }}>
                Withdraw
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button"
                                    onClick={() => props.withdraw(props.account)}
                                    className="btn btn-primary" style={{ float: 'right' }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" style={{ float: 'right' }}>
                Deposit
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </li>
    )
};

export default AccountItem;