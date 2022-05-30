import React from 'react';
import { MdErrorOutline } from "react-icons/md";
import "./modalLeft.css"
const ModalLeft = (props) => {
    return (
        <div className='modal-left'>
             <MdErrorOutline color='red' size={35}/>
            <h5> {props.message}</h5>
   
        </div>
    );
};

export default ModalLeft;