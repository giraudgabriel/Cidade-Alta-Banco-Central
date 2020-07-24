import React from 'react'
import moment from 'moment'
import {motion} from 'framer-motion';

export function ItemTransaction({transaction}) {

    const setColor = (type) => {
        switch (type) {
            case 'Depósito':
                return 'bg-light text-success font-weight-bold'
            case 'Transferência':
            case 'Saque':
                return 'bg-light text-danger font-weight-bold'
            default:
                return 'bg-light'
        }
    }

    const render = () => {
        if (transaction) {
            return <motion.tr key={transaction.id} className={setColor(transaction.typeDescription)}
                              initial={{opacity: 0}} animate={{opacity: 1}}
                              exit={{opacity: 0}}>
                <td><h5>{moment(transaction.dateTime).format("DD/MM/YYYY HH:MM")}</h5></td>
                <td><h5>{transaction?.user?.name ?? "Você"}</h5></td>
                <td><h5>{transaction?.userDestiny?.name ?? "Você"}</h5></td>
                <td><h5>{transaction.typeDescription}</h5></td>
                <td><h5 className={"text-right"}>{transaction.amount.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })}</h5></td>
            </motion.tr>;
        }
    }
    return (<>{render()}</>)
}

