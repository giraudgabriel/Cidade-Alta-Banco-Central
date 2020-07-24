import React from 'react'
import {FaUser, FaCalendar, FaMoneyCheck, FaSlidersH, FaMoneyBillWave} from 'react-icons/fa';
import {Pagination} from "../Pagination/Pagination";
import {ItemTransaction} from "../Item/ItemTransaction";

export function ListTransaction({transactions, page, qtdRecords, totalRecords, setPage, setQtdRecords}) {

    function render() {
        if (!transactions || transactions.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <h3 className="text-center">Nenhum registro encontrado
                            <FaSlidersH/></h3>
                    </td>
                </tr>
            )
        } else {
            return transactions.map(transaction => (<ItemTransaction key={transaction.id} transaction={transaction}/>));
        }
    }

    return (
        <div className={"table-responsive"}>
            <table className="table table-dark table-borderless rounded-top rounded-bottom">
                <thead>
                <tr>
                    <th className={"text-center"}><FaCalendar/>
                        Data
                    </th>
                    <th className={"text-center"}><FaUser/>
                        Destinatário
                    </th>
                    <th className={"text-center"}><FaMoneyCheck/>
                        Tipo de Transação
                    </th>
                    <th className={"text-center"}><FaMoneyBillWave/>
                        Valor
                    </th>


                </tr>
                </thead>
                <tbody>
                {render()}
                </tbody>
                <tfoot>
                <Pagination
                    hidden={!transactions || transactions.length === 0}
                    page={page}
                    qtdRecords={qtdRecords}
                    setPage={setPage}
                    setQtdRecords={setQtdRecords}
                    totalRecords={totalRecords ?? 0}/>
                </tfoot>
            </table>
        </div>
    )
}
