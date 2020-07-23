import React, {useState} from 'react';
import {FaDollarSign, FaRegMoneyBillAlt} from 'react-icons/fa';
import CurrencyInput from 'react-currency-masked-input';
import {InputGroup, InputGroupAddon} from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';
import TransactionService from "../services/TransactionService";
import {toast} from "react-toastify";

export function Deposit() {
    const [amount, setAmount] = useState('');

    async function handleDeposit(e) {
        e.preventDefault();
        console.log(amount)
        if (amount > 0) {
            try {
                await TransactionService.Deposit(amount).then(async response => {
                    await response.json();
                    toast.success('✅ Depositado com sucesso!', {
                        position: "top-center",
                    });
                    setAmount('');
                });
            } catch (e) {
                toast.error('❌ Dinheiro insuficiente!', {
                    position: "top-center",
                });
            }
        }else{
            toast.error('❌ Preencha os campos corretamente!');
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleDeposit(e)}>
                <label className="badge table-warning"><FaDollarSign />Valor a ser depositado:</label>
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
