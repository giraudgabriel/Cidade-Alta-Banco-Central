import {combineReducers} from 'redux';
import transactionReducer from './Transaction/transactionReducer';
import userReducer from "./User/userReducer";

export default combineReducers({transactions: transactionReducer, user: userReducer});