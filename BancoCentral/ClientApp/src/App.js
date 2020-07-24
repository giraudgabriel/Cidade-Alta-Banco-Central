import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import Extract from './pages/Extract';
import Deposit from './pages/Deposit';
import Transfer from './pages/Transfer';
import Withdraw from './pages/Withdraw';
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import Card from "reactstrap/es/Card";
import UserHeader from "./components/Header/UserHeader";
import history from './history';
import './custom.css'
import {ToastContainer} from "react-toastify";
import CardFooter from "reactstrap/es/CardFooter";
import 'react-toastify/dist/ReactToastify.min.css';
import Error from "./pages/Error";
import {AnimatePresence, motion} from 'framer-motion';

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <motion.div className="container mt-5" initial={{opacity: 0}} animate={{opacity: 1}}
                            exit={{opacity: 0}}>
                    <Card color="warning">
                        <CardHeader className={"background"}>
                            <UserHeader history={history}/>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={true}
                                closeOnClick
                                rtl={false}
                            />
                        </CardHeader>
                        <CardBody>
                            <AnimatePresence exitBeforeEnter>
                                <Switch>
                                    <Route path='/' exact component={Home}/>
                                    <Route path='/extract' exact component={Extract}/>
                                    <Route path='/deposit' exact component={Deposit}/>
                                    <Route path='/transfer' exact component={Transfer}/>
                                    <Route path='/withdraw' exact component={Withdraw}/>
                                    <Route component={Error}/>
                                </Switch>
                            </AnimatePresence>
                        </CardBody>
                        <CardFooter className={"background"}/>
                    </Card>
                </motion.div>
            </Router>
        );
    }
}

