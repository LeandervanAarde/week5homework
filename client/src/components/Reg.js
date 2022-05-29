import React, { useState } from 'react';
import ModalLeft from './subComponents/ModalLeft';

const Reg = () => {
    const [inputs, setInputs] = useState({
        first:  '',
        last:  '',
        email: '',
        username: '',
        contact: '',
        password:  '',
        passwordCon: '',
    });



    return (
       
        <div className='container'>
            <ModalLeft/>
            
        <div className='regCon'>
            <h1>Some company name</h1>
            <h2>LOG IN</h2>
            <form>
                <label/>
                <input placeholder='First Name' id='first' type={'text'}/>
       
                <input placeholder='Last Name' id='last' type={'text'}/>
            
                <input placeholder='User Name' id='username' type={'text'}/>

                <input placeholder='Email' id='mail' type={'email'}/>
                
                <input  placeholder='Contact Number' id='phone' type={'contact'}/>
         
                <input placeholder='Password' id='pass' className='pass' type={'password'}/>
              
                <input placeholder='Confirm Password' id='passConfirm' className='pass'type={'password'}/>
            </form>
            <button type='submit'>Register new user</button>
            <p className='smalltext'> Already a user? <strong>Log in</strong> here</p>
        </div>
    </div>
    );
};

export default Reg;