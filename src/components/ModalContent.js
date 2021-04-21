import React from 'react';

function ModalContent(props) {
    return (
        <div className="relative w-11/12 md:w-3/5 mx-auto px-8 py-6 bg-white h-auto z-20 rounded-lg mb-10">
            {props.children}
        </div>
    );
}

export default ModalContent;