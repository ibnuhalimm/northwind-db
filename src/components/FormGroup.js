import React from 'react';

const FormGroup = props => {
    return (
        <div className="mb-5 lg:flex lg:flex-row lg:items-center lg:flex-justify-between">
            {props.children}
        </div>
    );
};

export default FormGroup;