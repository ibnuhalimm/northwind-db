import React from 'react';

const FormLabel = props => {
    const { isRequired } = props;

    return (
        <label className="block mb-2 lg:w-1/3 lg:relative lg:top-1 lg:text-right lg:mr-2">
            {props.children}
            {
                isRequired === true
                ? <span className="text-red-500 ml-2">*</span>
                : null
            }
        </label>
    );
};

export default FormLabel;