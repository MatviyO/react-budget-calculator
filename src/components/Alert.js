import React from 'react';

const Alert = ({type, text}) => {
    return (
        <div className="col-md-12">
            <div className="flex-block">
                <div className={`alert aleert-${type}`}>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Alert
