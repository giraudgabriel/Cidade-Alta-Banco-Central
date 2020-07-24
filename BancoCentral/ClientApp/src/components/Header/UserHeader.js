import React from 'react';
import CardHeader from "reactstrap/es/CardHeader";
import {FaPiggyBank, FaUser, FaWallet, FaSignOutAlt} from "react-icons/fa";
import Card from "reactstrap/es/Card";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {toast} from "react-toastify";
import history from "../../history";
import {signOut} from '../../actions';
import logo from '../../assets/logo.png'

class UserHeader extends React.Component {
    componentDidMount() {
        if (!this.props.user) history.push('/')
    }

    render() {
        let {user, history, signOut} = this.props;
        return <div className="row">
            <div className={"col text-left"}>
                            <img src={logo} className={"text-center mb-2"} alt="logo" style={{cursor: 'pointer', width: '75px'}}
                                 onClick={() => user ? history.push('/home') : history.push('/')}/>
            </div>
            <div className={"col-sm-6 text-right"} hidden={!user}>
                <Card className="bg-warning">
                    <CardHeader className={"text-left"}>
                        <div className={"row"}>
                            <p className={"m-2 badge-dark badge"}><FaUser/> {user?.name}</p>
                            <p className={"m-2 badge-dark badge"}>
                                <FaWallet/> Carteira: {user?.amountWallet?.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</p>
                            <p className={"m-2 badge-dark badge"}>
                                <FaPiggyBank/> Banco: {user?.amountBank?.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</p>
                            <p className={"m-2 badge-danger badge btn"}
                               onClick={() => signOut() && toast.warn("Saindo do banco...")}><FaSignOutAlt/> Sair</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    }
}

UserHeader.propTypes = {
    user: PropTypes.any
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps, {signOut})(UserHeader);