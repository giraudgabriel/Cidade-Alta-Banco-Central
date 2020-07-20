import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Extrato } from './components/Extrato';
import { Deposito } from './components/Deposito';
import { Transferencia } from './components/Transferencia';
import { Saque } from './components/Saque';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/extrato' component={Extrato} />
        <Route path='/deposito' component={Deposito} />
        <Route path='/transferencia' component={Transferencia} />
        <Route path='/saque' component={Saque} />
      </Layout>
    );
  }
}
