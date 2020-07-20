import React, {Component} from 'react';
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Card>
                <CardHeader className="text-center">
                    <h3>Cidade Alta</h3>
                </CardHeader>
                <CardBody>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <button className="btn btn-success btn-block btn-lg">Saque
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <button className="btn btn-warning btn-block btn-lg">Depositar
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <button className="btn btn-primary btn-block btn-lg">Transferência
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <button className="btn btn-info btn-block btn-lg">Extrato
                            </button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}
