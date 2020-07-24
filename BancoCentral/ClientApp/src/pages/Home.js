import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaRegListAlt, FaWallet, FaEnvelopeOpenText, FaExchangeAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                     exit={{opacity: 0}}>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/withdraw" className="btn btn-success btn-block btn-lg" style={{
                            padding: '10% 0'
                        }}><h1><FaWallet/> Sacar</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/deposit" className="btn btn-dark btn-block btn-lg" style={{
                            padding: '10% 0'
                        }}><h1>
                            <FaEnvelopeOpenText/> Depositar</h1>
                        </Link>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <Link to="/transfer" className="btn btn-primary btn-block btn-lg" style={{
                            padding: '10% 0'
                        }}><h1>
                            <FaExchangeAlt/> Transferir</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/extract" className="btn btn-info btn-block btn-lg" style={{
                            padding: '10% 0'
                        }}><h1><FaRegListAlt/> Extrato</h1>
                        </Link>
                    </div>
                </div>
            </motion.div>
        );
    }
}
