import React from 'react';
import {MdEdit, MdDelete} from "react-icons/all";

const ExpenseItem = ({expenses, index}) => {
    const {id, charge, amount} = expenses
    return (
        <tr>
            <th scope="row">index</th>
            <td>{charge}</td>
            <td>{amount}</td>
        </tr>
        // <li>
        //     <div className="info">
        //         <span className="expense">{charge}</span>
        //         <span className="amount">{amount}</span>
        //
        //     </div>
        // </li>
    );

}

export default ExpenseItem
