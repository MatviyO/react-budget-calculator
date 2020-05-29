import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
    return (
        <>
            <div className="row mt-3">
                <div className="flex-block">
                    <ul className="list">
                        {expenses.map((expenses) => {
                            return <ExpenseItem key={expenses.id} expenses={expenses} />
                        })}
                    </ul>
                </div>
            </div>
            <div className="row mt-3">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default ExpenseList
