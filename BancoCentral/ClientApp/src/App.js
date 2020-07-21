import React, {Component} from 'react';
import {Route} from 'react-router';
import {Home} from './pages/Home';
import {Extract} from './pages/Extract';
import {Deposit} from './pages/Deposit';
import {Transfer} from './pages/Transfer';
import {Withdraw} from './pages/Withdraw';
import './custom.css'
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import Card from "reactstrap/es/Card";

export default class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Card>
                    <CardHeader className="text-center">
                        <h3>Cidade Alta</h3>
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
        );
    }
}
