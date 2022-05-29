import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <>
            <div className='container'>
                <div className='regCon'>
                    <h1>Some company name</h1>
                    <h2>LOG IN</h2>
                    <form>
                        <input id='user' type={'text'} />
                        <label id='userNAme'>Username</label>

                        <input id='passW' type={'passwords'} />
                        <label id='passC'>Password</label>

                    </form>

                    <button type='submit'>LOG IN</button>
                    <p className='smalltext'> Not a user? <strong>Register here</strong></p>
                </div>
            </div>
        </>


    );
};

export default Login;