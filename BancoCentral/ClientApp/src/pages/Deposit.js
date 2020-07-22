import React, {useState} from 'react';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'

export function Deposit() {
    const [amount, setAmount] = useState('');

    async function handleDeposit(e) {
        e.preventDefault();
        console.log(amount)
        if (amount > 0) {
            try {
                const response = await fetch('api/transaction/deposit', {
                    method: 'POST',
                    body: amount,
                    headers: {
                        'Accept': 'application/json; charset=utf-8',
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                })
                const data = await response.json();
                console.log(data);
                alert('Depositado com sucesso!');
                setAmount('');
            } catch (e) {
                console.error(e);
                alert('Dinheiro insuficiente!');
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleDeposit(e)}>
                <label className="badge badge-warning">Valor a ser depositado:</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                    <CurrencyInput className="form-control form-control-lg text-success"
                                   placeholder="0,00" value={amount}
                                   onChange={(e, amount) => setAmount(amount)}
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
