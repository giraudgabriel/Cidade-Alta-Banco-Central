import React, {useState} from 'react';
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {createTransfer, fetchUser} from "../actions";
import {FormTransaction} from "../components/Form/FormTransaction";
import {motion} from 'framer-motion';

function Transfer({createTransfer, fetchUser}) {
    const [amount, setAmount] = useState('');
    const [passport, setPassport] = useState('');

    async function handleTransfer(e) {
        e.preventDefault();
        if (amount > 0 && passport !== '') {
            const response = await createTransfer({amount, passport})
            if (!response?.detail) {
                toast.success('✅ Transferido com sucesso!');
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
                passport={passport}
                setPassport={setPassport}
                buttonText={"Transferir"}
                label={"Valor a ser transferido"}
                handleSubmit={handleTransfer}
            />
        </motion.div>
    )
}

export default connect(null, {createTransfer, fetchUser})(Transfer)