import React from 'react';

const Button = props => {
    const { onClick, color, type } = props;

    if (color === 'red') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-2 mx-1 border border-solid bg-red-600 hover:bg-opacity-80 border-red-700 text-white shadow-md rounded-full text-sm transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }


    if (color === 'green') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-2 mx-1 border border-solid bg-green-600 hover:bg-opacity-80 border-green-700 text-white shadow-md rounded-full text-sm transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }


    if (color === 'blue') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-2 mx-1 border border-solid bg-blue-600 hover:bg-opacity-80 border-blue-700 text-white shadow-md rounded-full text-sm transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }

    return (
        <button
            type={type ?? 'button'}
            className="inline-flex items-center outline-none focus:outline-none px-4 py-2 mx-1 border border-solid bg-indigo-600 hover:bg-opacity-80 border-indigo-700 text-white shadow-md rounded-full text-sm transition duration-300"
            onClick={onClick}>
                {props.children}
        </button>
    );

};

export default Button;