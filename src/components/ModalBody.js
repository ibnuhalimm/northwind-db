import React from 'react';

function ModalBody(props) {
    return (
        <div className="xl:px-6">
            {props.children}
        </div>
    );
}

export default ModalBody;