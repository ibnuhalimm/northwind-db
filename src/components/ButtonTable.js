import React from 'react';

const ButtonTable = props => {
    const { onClick, color, type } = props;

    if (color === 'red') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-1 mx-1 bg-red-600 hover:bg-opacity-80 text-white shadow-md rounded-full text-xs transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }


    if (color === 'green') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-1 mx-1 bg-green-600 hover:bg-opacity-80 text-white shadow-md rounded-full text-xs transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }


    if (color === 'blue') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-1 mx-1 bg-blue-600 hover:bg-opacity-80 text-white shadow-md rounded-full text-xs transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }


    if (color === 'gray') {
        return (
            <button
                type={type ?? 'button'}
                className="inline-flex items-center outline-none focus:outline-none px-4 py-1 mx-1 bg-gray-600 hover:bg-opacity-80 text-white shadow-md rounded-full text-xs transition duration-300"
                onClick={onClick}>
                    {props.children}
            </button>
        );
    }

    return (
        <button
            type={type ?? 'button'}
            className="inline-flex items-center outline-none focus:outline-none px-4 py-1 mx-1 bg-indigo-600 hover:bg-opacity-80 text-white shadow-md rounded-full text-xs transition duration-300"
            onClick={onClick}>
                {props.children}
        </button>
    );

};

export default ButtonTable;