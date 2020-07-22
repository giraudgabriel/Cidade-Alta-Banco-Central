import React from 'react';
import CardHeader from "reactstrap/es/CardHeader";
import {FaPiggyBank, FaUser, FaWallet, FaSignOutAlt} from "react-icons/fa";
import Card from "reactstrap/es/Card";

export const UserHead = () => {
    const [user, setUser] = React.useState({});

    async function getUserAsync()
    {
        const response = await fetch(`api/user`);
        return await response.json()
    }

    React.useEffect(() => {
        getUserAsync()
            .then(user => setUser(user));
    }, [])


    return <Card className="bg-warning">
        <CardHeader className={"text-left"}>
            <div className={"row"}>
                <p className={"m-2 badge-dark badge"}><FaUser/> {user?.name}</p>
                <p className={"m-2 badge-dark badge"}>
                    <FaWallet/> Carteira: {user?.amountWallet?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <p className={"m-2 badge-dark badge"}><FaPiggyBank/> Banco: {user?.amountBank?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <p className={"m-2 badge-danger badge btn"}><FaSignOutAlt/> Sair</p>
            </div>
        </CardHeader>
    </Card>
}