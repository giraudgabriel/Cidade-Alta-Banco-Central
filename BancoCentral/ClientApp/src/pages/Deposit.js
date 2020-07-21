import React, {Component} from 'react';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'

export class Deposit extends Component {
    state = {
        amount: null
    }

    handleDeposit(e) {
        e.preventDefault();
        console.log(this.state.amount)
        if (this.state.amount > 0) {
            fetch('api/transaction/deposit', {
                method: 'POST',
                body: this.state.amount,
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.handleDeposit(e)}>
                    <label className="badge badge-warning">Valor a ser depositado:</label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                        <CurrencyInput className="form-control form-control-lg text-success"
                                       placeholder="0,00" value={this.state.amount}
                                       onChange={(e, amount) => this.setState({...this.state, amount})}
                        />
                        <InputGroupAddon addonType="append">
                            <button type={"submit"} className="btn btn-success btn-lg"><FaRegMoneyBillAlt/> Depositar
                            </button>
                        </InputGroupAddon>
                    </InputGroup>
                </form>
            </div>
        )
    }
}
