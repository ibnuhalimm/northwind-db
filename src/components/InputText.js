import React from 'react';

const InputText = props => {
    const { type, name, onChange, value } = props;

    return (
        <input
            type={type ?? 'text'}
            name={name}
            className="w-full outline-none focus:outline-none px-4 py-2 bg-white border border-solid border-gray-300 rounded-lg"
            onChange={onChange}
            value={value} />
    );
}

export default InputText;