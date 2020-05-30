import React from 'react';
import {BsArrowRight} from "react-icons/all";
import {MdDelete} from "react-icons/all";

export default function Footer({expenses}){

        return (
            <>
                <div className="col-md-12 mt-5">
                    <div className="flex-block">
                        {expenses.length > 0 && <button type="submit" className="class-btn">Clear <MdDelete/></button>}
                    </div>
                    <div className="flex-block mt-5">
                        <h2>Total Spending : $ {expenses.reduce((acc, curr)=> {
                            return (acc += parseInt(curr.amount))
                        }, 0)}</h2>
                    </div>
                </div>

            </>
        )
            ;

}


