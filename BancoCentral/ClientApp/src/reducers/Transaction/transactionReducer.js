import {CREATE_DEPOSIT, FETCH_EXTRACT, CREATE_TRANSFER, CREATE_WITHDRAW} from '../../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_DEPOSIT:
        case CREATE_TRANSFER:
        case CREATE_WITHDRAW:
            const record = action.payload;
            return {
                ...state,
                records: state?.records ? [...state.records, record] : [record],
                totalRecords: state?.totalRecords ? state.totalRecords + 1 : 1
            }
        case FETCH_EXTRACT:
            const {records, totalRecords} = action.payload;
            return {
                ...state,
                records,
                totalRecords
            }
        default:
            return state;
    }
};