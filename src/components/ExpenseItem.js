import React from 'react';
import {MdEdit, MdDelete} from "react-icons/all";

const ExpenseItem = ({expenses, index, handleDelete, handleEdit}) => {
    const {id, charge, amount} = expenses
    return (
        <tr>
            <th scope="row">{expenses.index}</th>
            <td>{expenses.charge}</td>
            <td>{expenses.amount}</td>
            <td><a onClick={() => handleEdit(id)} className="button-back"><MdEdit/></a></td>
            <td><a onClick={() => handleDelete(id)} className="button-back"><MdDelete/></a></td>
        </tr>
    );

}

export default ExpenseItem
