import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        fetch("api/transaction/extract/2020-07-20/2020-07-20").then(response => {
            response.json().then(json => {
                console.log(json)
            })
        })
    }

    render() {
        return (
            <>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/withdraw" className="btn btn-success btn-block btn-lg">Saque
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/deposit" className="btn btn-warning btn-block btn-lg">Depositar
                        </Link>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/transfer" className="btn btn-primary btn-block btn-lg">Transferência
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/extract" className="btn btn-info btn-block btn-lg">Extrato
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}
