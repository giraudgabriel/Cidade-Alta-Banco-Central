import React, {useState} from 'react';
import {toast} from "react-toastify";
import {connect} from 'react-redux';
import {createWithdraw, fetchUser} from '../actions';
import {FormTransaction} from "../components/Form/FormTransaction";
import {motion} from 'framer-motion';

function Withdraw({createWithdraw, fetchUser}) {
    const [amount, setAmount] = useState('');

    async function handleWithdraw(e) {
        e.preventDefault();
        if (amount > 0) {
            const response = await createWithdraw({amount});
            if (!response?.detail) {
                toast.success('✅ Sacado com sucesso!');
                setAmount('');
                fetchUser();
            } else {
                toast.error(`❌ ${response.detail}`)
            }
        } else {
            toast.error('❌ O valor deve ser maior que zero!');
        }
    }

    return (
        <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <FormTransaction
                amount={amount}
                setAmount={setAmount}
                buttonText={"Sacar"}
                label={"Valor a ser sacado"}
                handleSubmit={handleWithdraw}/>
        </motion.div>
    )
}

export default connect(null, {createWithdraw, fetchUser})(Withdraw);

