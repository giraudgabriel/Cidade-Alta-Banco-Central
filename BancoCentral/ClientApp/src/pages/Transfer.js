import React, {useState} from 'react';
import {FaExchangeAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'
import Input from "reactstrap/es/Input";

export function Transfer() {
    const [amount, setAmount] = useState('');
    const [passport, setPassport] = useState('');

    async function handleWithdraw(e) {
        e.preventDefault();
        if (amount > 0 && passport !== '') {
            try {
                const response = await fetch('api/transaction/transfer', {
                    method: 'POST',
                    body: JSON.stringify({amount, passport}),
                    headers: {
                        'Accept': 'application/json; charset=utf-8',
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                })
                const data = await response.json();
                console.log(data);
                alert('Transferido com sucesso!');
                setAmount('');
            } catch (e) {
                console.error(e);
                alert('Algo deu errado!');
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleWithdraw(e)}>
                <label className="badge badge-warning">Valor a ser transferido:</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                    <CurrencyInput className="form-control form-control-lg text-success"
                                   placeholder="0,00" value={amount}
                                   onChange={(e, amount) => setAmount(amount)}
                    />
                    <InputGroupAddon addonType="prepend">Passaporte</InputGroupAddon>
                    <Input placeholder="Passaporte"  value={passport} onChange={(e) => setPassport(e.target.value)} bsSize={"lg"} type={"number"}/>
                    <InputGroupAddon addonType="append">
                        <button type={"submit"} className="btn btn-success btn-lg"><FaExchangeAlt/> Transferir
                        </button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    )
}
