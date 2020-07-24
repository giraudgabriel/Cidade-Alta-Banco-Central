import {
    CREATE_WITHDRAW,
    CREATE_TRANSFER,
    CREATE_DEPOSIT,
    FETCH_EXTRACT,
    FETCH_USER, SIGN_IN
} from './types';

import history from '../history';
import TransactionService from "../services/Transaction/TransactionService";
import UserService from "../services/User/UserService";

export const createDeposit = ({amount}) => async (dispatch) => {
    const response = await TransactionService.createDeposit(amount);
    const data = await response.json();
    if (response.ok) {
        dispatch({type: CREATE_DEPOSIT, payload: data});
        history.push('/home');
    }
    return data;
};

export const createTransfer = ({amount, passport}) => async (dispatch) => {
    const response = await TransactionService.createTransfer(amount, passport);
    const data = await response.json();
    if (response.ok) {
        dispatch({type: CREATE_TRANSFER, payload: data});
        history.push('/home');
    }
    return data;
};

export const createWithdraw = ({amount}) => async (dispatch) => {
    const response = await TransactionService.createWithdraw(amount);
    const data = await response.json();
    if (response.ok) {
        dispatch({type: CREATE_WITHDRAW, payload: data});
        history.push('/home');
    }
    return data;
};

export const fetchExtract = ({startDate, endDate, page, qtdRecords}) => async (dispatch) => {
    const response = await TransactionService.fetchExtract(startDate, endDate, page, qtdRecords);
    const data = await response.json();
    dispatch({
        type: FETCH_EXTRACT,
        payload: data ?? []
    });
};

export const fetchUser = () => async dispatch => {
    const response = await UserService.fetchUser();
    const data = await response.json();
    dispatch({type: FETCH_USER, payload: data});
};


export const signIn = ({passport}) => async dispatch => {
    const response = await UserService.signIn(passport);
    const data = await response.json();
    if (response.ok) {
        dispatch({type: SIGN_IN, payload: data});
        history.push('/home');
    }
    return data;
}

export const signOut = () => async dispatch => {
    await UserService.signOut();
    dispatch({type: SIGN_IN, payload: null});
    history.push('/');
}