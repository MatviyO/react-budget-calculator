import React from 'react';
import {MdEdit, MdDelete} from "react-icons/all";

const ExpenseItem = ({expenses, index}) => {
    const {id, charge, amount} = expenses
    return (
        <tr>
            <th scope="row">{expenses.index}</th>
            <td>{expenses.charge}</td>
            <td>{expenses.amount}</td>
            <td><a className="button-back"><MdEdit/></a></td>
            <td><a className="button-back"><MdDelete/></a></td>
        </tr>
    );

}

export default ExpenseItem
