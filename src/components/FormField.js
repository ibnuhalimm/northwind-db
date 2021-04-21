import React from 'react';

const FormField = props => {
    return (
        <div className="lg:w-2/3 lg:ml-2">
            {props.children}
        </div>
    );
}

export default FormField;