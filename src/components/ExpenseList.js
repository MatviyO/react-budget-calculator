import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
    return (
        <>
            <div className="row mt-3">

                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>

                    {expenses.map(expenses => {
                        return (
                            <tr>
                                <th scope="row">{expenses.index}</th>
                                <td>{expenses.charge}</td>
                                <td>{expenses.amount}</td>
                            </tr>)
                    })}
                    </tbody>
                </table>
            </div>

        </>
    );

}

export default ExpenseList
