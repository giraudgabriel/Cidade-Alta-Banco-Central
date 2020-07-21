import React from 'react';
import CardHeader from "reactstrap/es/CardHeader";
import {FaPiggyBank, FaUser, FaWallet, FaSignOutAlt} from "react-icons/fa";
import Card from "reactstrap/es/Card";

export const UserHead = () => {

    return <Card className="bg-warning">
        <CardHeader className={"text-left"}>
            <div className={"row"}>
                <p className={"m-2 badge-dark badge"}><FaUser/> Gregorio Alves</p>
                <p className={"m-2 badge-dark badge"}><FaWallet/> Carteira: 50000,00</p>
                <p className={"m-2 badge-dark badge"}><FaPiggyBank/> Banco: 5000,00</p>
                <p className={"m-2 badge-danger badge btn"}><FaSignOutAlt/> Sair</p>
            </div>
        </CardHeader>
    </Card>
}