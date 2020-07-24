import React from 'react'
import moment from 'moment'
import {motion} from 'framer-motion';
import {connect} from "react-redux";

function ItemTransaction({transaction, user}) {

    const setColor = (type, userDestiny) => {
        console.log(user, userDestiny)
        switch (type) {
            case 'Depósito':
                return 'bg-light text-success font-weight-bold'
            case 'Transferência':
                if (user.id === userDestiny.id) return 'bg-light text-success font-weight-bold'
                else return 'bg-light text-danger font-weight-bold'
            case 'Saque':
                return 'bg-light text-danger font-weight-bold'
            default:
                return 'bg-light'
        }
    }

    const render = () => {
        if (transaction) {
            return <motion.tr key={transaction.id} className={setColor(transaction.typeDescription, transaction.userDestiny)}
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

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps, null)(ItemTransaction)