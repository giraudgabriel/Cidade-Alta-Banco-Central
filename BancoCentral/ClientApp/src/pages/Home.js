import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaRegListAlt, FaWallet, FaEnvelopeOpenText, FaExchangeAlt} from 'react-icons/fa';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/withdraw" className="btn btn-success btn-block btn-lg"><h1><FaWallet/> Saque</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/deposit" className="btn btn-warning btn-block btn-lg"><h1>
                            <FaEnvelopeOpenText/> Depositar</h1>
                        </Link>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/transfer" className="btn btn-primary btn-block btn-lg"><h1>
                            <FaExchangeAlt/> Transferência</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/extract" className="btn btn-info btn-block btn-lg"><h1><FaRegListAlt/> Extrato</h1>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}
