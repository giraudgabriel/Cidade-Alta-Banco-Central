import React, {useState, useEffect, useCallback} from 'react'
import moment from 'moment';
import {connect} from "react-redux";
import {fetchExtract} from "../actions";
import {FormExtract} from "../components/Form/FormExtract";
import {ListTransaction} from "../components/List/ListTransaction";
import {motion} from 'framer-motion';

function Extract({transactions, totalRecords, fetchExtract}) {
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
    const [page, setPage] = useState(1);
    const [qtdRecords, setQtdRecords] = useState(5);

    const fetchData = useCallback(() => {
        fetchExtract({startDate, endDate, page, qtdRecords});
    }, [fetchExtract, startDate, endDate, page, qtdRecords])

    useEffect(() => {
        fetchData();
    }, [startDate, endDate, page, qtdRecords, fetchData]);


    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                exit={{opacity: 0}}>
            <FormExtract
                endDate={endDate}
                startDate={startDate}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
            />
            <ListTransaction
                page={page}
                qtdRecords={qtdRecords}
                setPage={setPage}
                setQtdRecords={setQtdRecords}
                totalRecords={totalRecords}
                transactions={transactions}
            />
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        totalRecords: state.transactions.totalRecords,
        transactions: state.transactions.records
    }
};

export default connect(mapStateToProps, {fetchExtract})(Extract)