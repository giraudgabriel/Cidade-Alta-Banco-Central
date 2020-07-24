import React, {useState} from 'react';
import {toast} from "react-toastify";
import {createDeposit, fetchUser} from '../actions'
import {connect} from "react-redux";
import {FormTransaction} from "../components/Form/FormTransaction";
import {motion} from 'framer-motion';

function Deposit({createDeposit, fetchUser}) {
    const [amount, setAmount] = useState('');

    async function handleDeposit(e) {
        e.preventDefault();
        if (amount > 0) {
            const response = await createDeposit({amount});
            if (!response?.detail) {
                toast.success('✅ Depositado com sucesso!', {position: "top-center"});
                setAmount('');
                fetchUser();
            } else {
                toast.error(`❌ ${response.detail}`)
            }
        } else {
            toast.error('❌ Preencha os campos corretamente!');
        }
    }

    return (
        <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <FormTransaction
                amount={amount}
                setAmount={setAmount}
                buttonText={"Depositar"}
                label={"Valor a ser depositado"}
                handleSubmit={handleDeposit}/>
        </motion.div>
    )
}

export default connect(null, {createDeposit, fetchUser})(Deposit)