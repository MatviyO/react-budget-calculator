import React from 'react';
import {BsArrowRight} from "react-icons/all";

const ExpenseForm = () =>  {
    return (
        <div className="row mt-3">
            <div className="col-md-6">
                <input type="text" name="charge" className="input-control" placeholder="Enter Some Text one..." />

            </div>
            <div className="col-md-6">
                <input type="text" name="amount" className="input-control" placeholder="Enter Some Text two..." />
            </div>
            <div className="col-md-12 mt-4">
                <div className="flex-block">
                    <button type="submit" className="class-btn">Submit <BsArrowRight  /></button>
                </div>

            </div>
        </div>
    );

}

export default ExpenseForm
