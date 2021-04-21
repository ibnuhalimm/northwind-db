import React from 'react';

function Modal(props) {
    let { isOpen } = props;

    const bodyTag = document.querySelector('body');

    let modalToggleClass ='opacity-0 pointer-events-none';
    bodyTag.classList.remove('modal-active');
    if (isOpen) {
        modalToggleClass = '';
        bodyTag.classList.add('modal-active');
    }

    return (
        <div className={ 'w-full h-full fixed inset-0 z-20 transition-opacity duration-500 ' + modalToggleClass }>
            <div className="absolute w-full h-full bg-gray-900 bg-opacity-80 z-20"></div>
            <div className="relative h-full py-10 overflow-y-auto">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;