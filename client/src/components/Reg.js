import React, { useState } from 'react';
import ModalLeft from './subComponents/ModalLeft';
import ModalRight from './subComponents/ModalRight';
import axios from "axios";
const Reg = () => {
    const [inputs, setInputs] = useState({
        first: '',
        last: '',
        email: '',
        username: '',
        contact: '',
        password: '',
        passwordCon: '',
    });

    const [firstError, setFirstError] = useState();
    const [lastError, setLastError] = useState();
    const [usernameError, setUserNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [contactError, setContactError] = useState();
    const [passError, setPassErr] = useState();
    const [passConError, setPassConError] = useState();

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    //function to get the value for the firstName 
    const firstVal = (e) => {
        const inVal = e.target.value;
        setInputs({ ...inputs, first: inVal });
        if (inputs.first !== '') { setFirstError() }
    }
    //value for second name 
    const lastVal = (e) => {
        const inVal = e.target.value;
        setInputs({ ...inputs, last: inVal });
        if (inputs.last !== '') { setLastError() }
    }
    //value for 3rd name 

    const emailVal = (e) => {
        const mailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const inVal = e.target.value;
        setInputs({ ...inputs, email: inVal });
        if (inputs.email !== '') { setEmailError(); }
        if (!inVal.match(mailRegex)) {
            setEmailError(<ModalLeft message="Not a valid email format..." />)
        }
    }

    //authenticate the email that was just put in 
    const emailAuth = () => {
        axios.post('http://localhost:8888/api/authenticateEmail.php', inputs)
            .then((res) => {
                console.log(res);
                if (res.data === true) {
                    setEmailAvail()
                    setEmailError()
                } else if (res.data === false) {
                    setEmailAvail();
                    setEmailError(<ModalRight message="Email not available." />);

                } else if (res.data === '') {
                    setEmailAvail();
                    setEmailError();
                }
            })
    }

    //Validating the username 
    const usernameVal = (e) => {
        const inVal = e.target.value;
        setInputs({ ...inputs, username: inVal });
        if (inputs.username !== '') {
            setUserNameError();
        }
    }

    //We need to now authenticate the user with an axios call 

    const authUser = () => {
        axios.post('http://localhost:8888/api/authenticateUser.php', inputs)
            .then((res) => {
                console.log(res);
                if (res.data === true) {
                    console.log("data is ready to be fethced");
                    setUserAvail();
                } else if (res.data === false) {
                    setUserAvail();
                    setUserNameError(<ModalRight message="Username not available." />);

                } else if (res.data === '') {
                    setUserNameError();
                    setUserAvail()
                }
            })
    }

    //validate contact details
    const contactVal = (e) => {
        const contactRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const inVal = e.target.value;
        setInputs({ ...inputs, contact: inVal });
        if (inputs.contact !== '') {
            setContactError();
        }

        if (!inVal.match(contactRegex)) {
            setContactError(<ModalLeft message="Please enter valid contact..." />)

        }
    }

    //validate the password
    const passVal = (e) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
        const inVal = e.target.value;
        setInputs({ ...inputs, password: inVal });

        if (inputs.password !== '') {
            setPassErr()
        }

        if (!inVal.match(passRegex)) {
            setPassErr(<ModalLeft message="Passwords must include..." />);

        }
    }



    const passConfirm = (e) => {
        const inVal = e.target.value;
        setInputs({ ...inputs, passwordCon: inVal });
        if (inputs.password === inVal) {
            setPassConError();
        } else {
            setPassConError(<ModalLeft message="Passwords do not match" />);

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if (inputs.first === '') {
            setFirstError(<ModalRight message="Please enter first Name" />)
        } else {
            setFirstError();
        }

        if (inputs.last === '') {
            setLastError(<ModalRight message="Please enter last Name" />)
        } else {
            setLastError()
        }

        if (inputs.email === '') {
            setEmailError(<ModalRight message="Please enter email" />)
        } else {
            setEmailError();
        }

        if (inputs.username === '') {
            setUserNameError(<ModalRight message="Please enter username" />);
        } else {
            setUserNameError();
        }

        if (inputs.contact === '') {
            setContactError(<ModalRight message="Please enter contact number" />)
        } else {
            setContactError()
        }

        if(inputs.password === ''){
            setPassErr(<ModalRight message="Please confirm password"/>)
        } else{
            setPassErr()
        }

        if(inputs.passConfirm === ''){
            setPassConError(<ModalRight message="Please confirm password"/>)
        } else{
            setPassConError()
        }

        let result = Object.values(inputs).some(o => 0 === '');

        if(result){
            console.log("There was an error that occured");
        } else{
            axios.post('http://localhost:8888/api/addUser.php', inputs)
            .then((res)=>{
                console.log(res);
            })


        }

    }
    //if using Icons place them here 

    //icons end here
    return (

        <div className='container'>
            <div className='regCon'>
                <div className='logo'></div>
                <h2>LOG IN</h2>
                <form>
                    {firstError}
                    <input placeholder='First Name' id='first' type={'text'} onChange={firstVal} />
                    {lastError}

                    <input placeholder='Last Name' className={lastError ? "err" : " "} id='last' type={'text'} onChange={lastVal} />
                    {usernameError}
                    {userAvail}
                    <input placeholder='User Name' id='username' type={'username'} onChange={usernameVal} onBlur={authUser} />
                    {emailError}
                    {emailAvail}
                    <input placeholder='Email' className={emailError ? "err" : ""} id='mail' type={'email'} onChange={emailVal} onBlur={emailAuth} />
                    {contactError}
                    <input className={contactError ? "err" : "norm"} placeholder='Contact Number' id='phone' type={'contact'} onChange={contactVal} />
                    {passError}
                    <input className={passError ? "err pass" : "pass"} placeholder='Password' id='pass' type={'password'} onChange={passVal} />
                    {passConError}
                    <input className={passConError ? "err passConfirm" : "pass"} placeholder='Confirm Password' id='passConfirm' type={'password'} onChange={passConfirm} />
                </form>
                <button type='submit' onClick={handleSubmit}>Register new user</button>
                <p className='smalltext'> Already a user? <strong>Log in</strong> here</p>
            </div>
        </div>
    );
};

export default Reg;