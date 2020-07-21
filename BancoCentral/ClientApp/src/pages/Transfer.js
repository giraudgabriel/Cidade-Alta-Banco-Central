import React, {Component} from 'react'
import {InputGroup, InputGroupAddon} from "reactstrap";
import CurrencyInput from "react-currency-masked-input";
import {FaRegMoneyBillAlt} from "react-icons/fa";

export class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <label className="badge badge-warning">Valor a ser transferido:</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                    <CurrencyInput className="form-control form-control-lg text-success"
                                   placeholder="0,00"/>
                    <InputGroupAddon addonType="append">
                        <button className="btn btn-success btn-lg"><FaRegMoneyBillAlt/> Transferir</button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}
