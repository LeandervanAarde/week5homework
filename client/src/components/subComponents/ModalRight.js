import React from 'react';
import { MdErrorOutline } from "react-icons/md";

const ModalRight = (props) => {
    return (
        <div className='modal-right'>
            <MdErrorOutline color='red' size={35} />
            <h5> {props.message}</h5>
        </div>
    );
};

export default ModalRight;