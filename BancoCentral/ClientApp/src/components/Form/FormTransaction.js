import React from 'react'
import {InputGroup, InputGroupAddon, Input} from 'reactstrap'
import {FaDollarSign} from 'react-icons/fa'
import CurrencyInput from 'react-currency-masked-input';

export function FormTransaction({
    label,
    buttonText,
    passport,
    setPassport,
    setAmount,
    amount,
    handleSubmit
}) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label className="badge table-warning"><FaDollarSign/>{label}</label>
            <InputGroup>
                <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                <CurrencyInput
                    className="form-control form-control-lg text-success"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e, amount) => setAmount(amount)}/>
                <InputGroupAddon addonType="prepend" hidden={passport === undefined}>
                    Passaporte</InputGroupAddon>
                <Input
                    hidden={passport === undefined}
                    placeholder="Passaporte"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    bsSize={"lg"}
                    type={"number"}/>
                <InputGroupAddon addonType="append">
                    <button type={"submit"} className="btn btn-success btn-lg"><FaDollarSign/> {buttonText}
                    </button>
                </InputGroupAddon>
            </InputGroup>
        </form>
    )
}
