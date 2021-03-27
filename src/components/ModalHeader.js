import React from 'react';

function ModalHeader(props) {
    return (
        <div className="mb-10 text-center">
            {props.children}
        </div>
    );
}

export default ModalHeader;