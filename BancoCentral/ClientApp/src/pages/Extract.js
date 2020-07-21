import React, {useState, useEffect, useCallback} from 'react'
import {FaUser, FaCalendar, FaMoneyCheck, FaMoneyBillWave, FaSlidersH, FaList, FaBook} from 'react-icons/fa';
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import FormFeedback from "reactstrap/es/FormFeedback";
import PaginationComponent from "react-reactstrap-pagination";
import Label from "reactstrap/es/Label";

export function Extract() {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
    const [extracts, setExtracts] = useState([]);
    const [page, setPage] = useState(1);
    const [qtdRecords, setQtdRecords] = useState(5);
    const [totalRecords, setTotalRecords] = useState(0);


    useEffect(() => {
        fetchData();
    }, [startDate, endDate, page, qtdRecords]);

    function handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        setPage(pageNumber);
    }

    const fetchData = useCallback(() => {
        fetch(`api/transaction/extract/${startDate}/${endDate}/${page}/${qtdRecords}`).then(response => {
            console.log(startDate, endDate)
            response.json().then(({records, totalRecords}) => {
                setExtracts(records);
                setTotalRecords(totalRecords)
            })
        })
    }, [endDate, startDate, page, qtdRecords])

    const setColor = (type) => {
        switch (type) {
            case 'Depósito':
                return 'bg-light text-success font-weight-bold'
            case 'Transferência':
            case 'Saque':
                return 'bg-light text-danger font-weight-bold'
            default:
                return 'bg-light'
        }
    }


    const renderData = () => {
        if (extracts.length === 0 || !extracts) {
            return (
                <tr>
                    <td colSpan="4"><h3 className="text-center">Nenhum registro encontrado <FaSlidersH/></h3></td>
                </tr>
            )
        } else {
            return extracts.map(extract =>
                (<tr key={extract.id} className={setColor(extract.typeDescription)}>
                    <td><h5>{new Date(extract.dateTime).toLocaleDateString()}</h5></td>
                    <td><h5>{extract.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h5></td>
                    <td><h5>{extract.typeDescription}</h5></td>
                    <td><h5>{extract?.userDestiny?.name ?? "Você"}</h5></td>
                </tr>)
            )
        }
    }

    return (
        <div>
            <div className="row mr-5 ml-5 mb-2">
                <div className="col">
                    <Form>
                        <FormGroup>
                            <label className="badge table-warning"><FaCalendar/> Data Inicial</label>
                            <Input className="form-control form-control-sm" value={startDate}
                                   onChange={(e) => setStartDate(e.target.value)} type="date"/>
                            <FormFeedback invalid>Digite um data válida</FormFeedback>
                            <FormText>Data inicial a ser filtrado o extrato</FormText>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col">
                    <Form>
                        <FormGroup>
                            <label className="badge table-warning"><FaCalendar/> Data Final</label>
                            <Input className="form-control form-control-sm" value={endDate}
                                   onChange={(e) => setEndDate(e.target.value)} type="date"/>
                            <FormFeedback invalid>Digite um data válida</FormFeedback>
                            <FormText>Data Final a ser filtrado o extrato</FormText>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-warning table-hover">
                    <thead>
                    <tr>
                        <th><FaCalendar/> Data</th>
                        <th><FaMoneyBillWave/> Valor</th>
                        <th><FaMoneyCheck/> Tipo de Transação</th>
                        <th><FaUser/> Destinatário</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderData()}
                    </tbody>
                </table>
                <div className={"row m-3"}>
                    <div className={"col-sm-2 mr-5"}>
                        <Label for="selectItensPerPage" className={"badge table-warning"}><FaList/> Itens por
                            página</Label>
                        <select className={"form-control form-control-sm"} value={qtdRecords}
                                onChange={(e) => setQtdRecords(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <div className={"col ml-5"} >
                        <Label className={"badge table-warning"}><FaBook/> Total de Registros: {totalRecords}</Label>
                            <PaginationComponent totalItems={totalRecords} pageSize={qtdRecords} onSelect={handlePageChange}
                                                 firstPageText={"Primeira"} lastPageText={"Última"} nextPageText={"Próxima"}
                                                 previousPageText={"Anterior"} size={"sm"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
