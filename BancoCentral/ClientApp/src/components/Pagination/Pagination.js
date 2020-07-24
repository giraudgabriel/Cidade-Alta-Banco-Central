import React from 'react'
import {Label} from 'reactstrap'
import PaginationComponent from 'react-reactstrap-pagination'
import {FaList, FaBook} from 'react-icons/fa'

export function Pagination({hidden, qtdRecords, setQtdRecords, totalRecords, page, setPage}) {
    return (
        <tr hidden={hidden}>
            <td>
                <Label for="selectItensPerPage" className={"badge badge-warning"}><FaList/>
                    Itens por página</Label>
                <select
                    className={"form-control form-control-sm"}
                    value={qtdRecords}
                    onChange={(e) => setQtdRecords(parseInt(e.target.value))}>
                    <option value="">Selecione</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </td>
            <td>
                <Label className={"badge badge-warning"}><FaBook/>
                    Total de Registros: {totalRecords}</Label>
                <PaginationComponent
                    totalItems={totalRecords}
                    pageSize={qtdRecords}
                    maxPaginationNumbers={1}
                    defaultActivePage={page}
                    onSelect={setPage}
                    firstPageText={"Primeira"}
                    lastPageText={"Última"}
                    nextPageText={"Próxima"}
                    previousPageText={"Anterior"}
                    size={"sm"}/>
            </td>
        </tr>
    )
}
