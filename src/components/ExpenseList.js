import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses, handleEdit, handleDelete}) => {
    return (
        <>
            <div className="row mt-3">

                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {expenses.map(expenses => {
                        return <ExpenseItem handleEdit={handleEdit}
                                            handleDelete={handleDelete} expenses={expenses} key={expenses.id} />

                    })}
                    </tbody>
                </table>
            </div>

        </>
    );

}

export default ExpenseList
