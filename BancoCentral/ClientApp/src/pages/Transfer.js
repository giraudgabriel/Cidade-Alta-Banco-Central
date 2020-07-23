import React, {useState} from 'react';
import {FaExchangeAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'
import Input from "reactstrap/es/Input";
import {toast} from "react-toastify";
import TransactionService from "../services/TransactionService";
import {FaDollarSign} from "react-icons/fa";

export function Transfer() {
    const [amount, setAmount] = useState('');
    const [passport, setPassport] = useState('');

    async function handleTransfer(e) {
        e.preventDefault();
        if (amount > 0 && passport !== '') {
            try {
                TransactionService.Transfer(amount, passport).then(async response => {
                    await response.json();
                    toast.success('✅ Transferido com sucesso!');
                    setAmount('');
                })
            } catch (e) {
                toast.error('❌ Algo deu errado!');
            }
        }else{
            toast.error('❌ Preencha os campos corretamente!');
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleTransfer(e)}>
                <label className="badge table-warning"><FaDollarSign />Valor a ser transferido:</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                    <CurrencyInput className="form-control form-control-lg text-success"
                                   placeholder="0,00" value={amount}
                                   onChange={(e, amount) => setAmount(amount)}
                    />
                    <InputGroupAddon addonType="prepend"> Passaporte</InputGroupAddon>
                    <Input placeholder="Passaporte" value={passport} onChange={(e) => setPassport(e.target.value)}
                           bsSize={"lg"} type={"number"}/>
                    <InputGroupAddon addonType="append">
                        <button type={"submit"} className="btn btn-success btn-lg"><FaExchangeAlt/> Transferir
                        </button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    )
}
