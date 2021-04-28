import React from 'react';

function ModalContent(props) {
    const { size } = props;

    let widthClass = 'md:w-3/5';
    if (size === 'small') {
        widthClass = 'sm:w-1/2 md:w-1/4 xl:w-96';
    }

    return (
        <div className={`relative w-11/12 ${widthClass} mx-auto px-8 py-6 bg-white h-auto z-20 rounded-lg mb-10`}>
            {props.children}
        </div>
    );
}

export default ModalContent;