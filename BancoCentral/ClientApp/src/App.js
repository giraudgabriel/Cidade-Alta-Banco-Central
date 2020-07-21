import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';
import {Home} from './pages/Home';
import {Extract} from './pages/Extract';
import {Deposit} from './pages/Deposit';
import {Transfer} from './pages/Transfer';
import {Withdraw} from './pages/Withdraw';
import './custom.css'
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import Card from "reactstrap/es/Card";
import {UserHead} from "./components/UserHead";
import {FaArrowCircleLeft} from 'react-icons/fa';
import history from './history';

export default class App extends Component {
    static contextTypes = {
        router: () => true,
    }

    render() {
        return (
            <Router history={history}>
                <div className="container mt-5">
                    <Card>
                        <CardHeader>
                            <div className="row">
                                <div className={"col-sm-1"}>
                                    <button
                                        className="btn btn-warning text-left"
                                        onClick={history.goBack}>
                                        <FaArrowCircleLeft/>
                                    </button>
                                </div>
                                <div className={"col text-left"}>
                                    <h3>Cidade Alta</h3>
                                </div>
                                <div className={"col-sm-7 text-right"}>
                                    <UserHead />
                                </div>
                                
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Route exact path='/' component={Home}/>
                            <Route path='/extract' component={Extract}/>
                            <Route path='/deposit' component={Deposit}/>
                            <Route path='/transfer' component={Transfer}/>
                            <Route path='/withdraw' component={Withdraw}/>
                        </CardBody>
                    </Card>
                </div>
            </Router>
        );
    }
}

