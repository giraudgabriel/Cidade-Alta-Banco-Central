import React, {useState} from 'react';
import {FaDollarSign, FaRegMoneyBillAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'
import TransactionService from "../services/TransactionService";
import {toast} from "react-toastify";

export function Withdraw() {
    const [amount, setAmount] = useState('');

    async function handleWithdraw(e) {
        e.preventDefault();
        if (amount > 0) {
            try {
                TransactionService.Withdraw(amount).then(async response => {
                    await response.json();
                    toast.success('✅ Sacado com sucesso!');
                    setAmount('');
                })
            } catch (e) {
                console.error(e);
                toast.error('❌ Dinheiro insuficiente no banco!');
            }
        }else{
            toast.error('❌ O valor deve ser maior que zero!');
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleWithdraw(e)}>
                <label className="badge table-warning"><FaDollarSign />Valor a ser sacado:</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                    <CurrencyInput className="form-control form-control-lg text-success"
                                   placeholder="0,00" value={amount}
                                   onChange={(e, amount) => setAmount(amount)}
                    />
                    <InputGroupAddon addonType="append">
                        <button type={"submit"} className="btn btn-success btn-lg"><FaRegMoneyBillAlt/> Sacar
                        </button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    )
}
