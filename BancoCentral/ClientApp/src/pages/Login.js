import React, {useState} from "react";
import {motion} from "framer-motion";
import {signIn} from "../actions";
import {connect} from "react-redux";
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {FaSignInAlt, FaUser} from "react-icons/fa";
import history from '../history';
import {toast} from 'react-toastify';

function Login({signIn}) {
    const [passport, setPassport] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        if (passport > 0) {
            const response = await signIn({passport});
            if (!response?.detail) {
                toast.success('✅ Logado com sucesso!', {position: "top-center"});
                history.push('/home');
            } else {
                toast.error(`❌ ${response.detail}`)
            }
        } else {
            toast.error('❌ Preencha os campos corretamente!');
        }
    }

    return (<motion.div>
        <form onSubmit={e => handleLogin(e)}>
            <label className={"badge table-warning"}><FaUser /> Digite o passaporte para entrar:</label>
            <InputGroup>
                <Input placeholder={"Passaporte"} type={"number"} value={passport}
                       onChange={(e) => setPassport(e.target.value)}/>
                <InputGroupAddon addonType={"append"}>
                    <Button color={"success"} type={"submit"}> <FaSignInAlt/> Entrar</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>

    </motion.div>);
}

export default connect(null, {signIn})(Login);