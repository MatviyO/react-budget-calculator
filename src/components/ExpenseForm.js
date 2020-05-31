import React from 'react';
import {BsArrowRight} from "react-icons/all";

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">

                <div className="col-md-6">
                    <input type="text" name="charge"
                           value={charge} onChange={handleCharge}
                           className="input-control" placeholder="Charge..."/>
                </div>
                <div className="col-md-6">
                    <input type="number" name="amount"
                           value={amount} onChange={handleAmount}
                           className="input-control" placeholder="Amount..."/>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="flex-block">
                        <button type="submit" className="class-btn">Submit <BsArrowRight/></button>
                    </div>
                </div>

            </div>
        </form>
    );

}

export default ExpenseForm
