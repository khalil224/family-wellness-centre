import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    const navigateRegister = e => {
        navigate('/register')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="login-container">
                    <div className="brand-title">LOGIN</div>
                    <div className="inputs">
                        <label>EMAIL</label>
                        <input ref={emailRef} type="email" placeholder="example@test.com" required />
                        <label>PASSWORD</label>
                        <input ref={passwordRef} type="password" placeholder="Min 6 charaters long" required />
                        <button className='login-button' type="submit">LOGIN</button>
                        <p className='mt-2 '>Don't have an account?<span className='text-primary px-2 ' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Register here</span></p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Login;