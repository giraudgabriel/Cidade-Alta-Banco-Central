import React from 'react';
import {Form, FormGroup, Input, FormText} from 'reactstrap';
import {FaCalendar} from 'react-icons/fa';

export function FormExtract({startDate, endDate, setStartDate, setEndDate}) {
    return (
        <div className="row mr-1 ml-1 mb-2 bg-dark rounded-top rounded-bottom">
            <div className="col">
                <Form>
                    <FormGroup>
                        <label className="badge badge-dark"><FaCalendar/> Data Inicial</label>
                        <Input className="form-control form-control-sm" value={startDate}
                               onChange={(e) => setStartDate(e.target.value)} type="date"/>
                        <FormText className={"badge badge-dark"}>Data inicial a ser filtrado o extrato</FormText>
                    </FormGroup>
                </Form>
            </div>
            <div className="col">
                <Form>
                    <FormGroup>
                        <label className="badge badge-dark"><FaCalendar/> Data Final</label>
                        <Input className="form-control form-control-sm" value={endDate}
                               onChange={(e) => setEndDate(e.target.value)} type="date"/>
                        <FormText className={"badge badge-dark text-white"}>Data Final a ser filtrado o extrato</FormText>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

