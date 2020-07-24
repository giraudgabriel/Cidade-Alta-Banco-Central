import React from 'react';
import CardHeader from "reactstrap/es/CardHeader";
import {FaPiggyBank, FaUser, FaWallet, FaSignOutAlt} from "react-icons/fa";
import Card from "reactstrap/es/Card";
import {connect} from "react-redux";
import {fetchUser} from "../../actions";
import * as PropTypes from "prop-types";
import {toast} from "react-toastify";

class UserHeader extends React.Component {
    componentDidMount() {
        let {fetchUser} = this.props;
        fetchUser();
    }

    render() {
        let {user, history} = this.props;
        return <div className="row">
            <div className={"col text-left"}>
                <h1 style={{cursor: 'pointer'}} onClick={() => history.push('/')}>Cidade Alta</h1>
            </div>
            <div className={"col-sm-7 text-right"}>
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
                            <p className={"m-2 badge-danger badge btn"} onClick={()=> toast.warn("Saindo do banco...")}><FaSignOutAlt/> Sair</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    }
}

UserHeader.propTypes = {
    fetchUser: PropTypes.any,
    user: PropTypes.any
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);