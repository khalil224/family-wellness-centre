import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let foundError;

    if (error) {

        foundError = <p className='text-danger'>Error: {error.message}</p>

    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
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
                        {foundError}
                        <p className='mt-2 '>Don't have an account?<span className='text-primary px-2 ' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Register here</span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Login;