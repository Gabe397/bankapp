import React from 'react';
import AccountList from "./AcountList";

const App = () =>{
        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-4">
                        <AccountList />
                    </div>

                    <div className="col-sm-4">

                    </div>

                </div>
            </div>
        );
};

export default App;