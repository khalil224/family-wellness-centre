import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


    let foundError;

    if (error) {

        foundError = <p className='text-danger'>Error: {error.message}</p>

    }
    useEffect(() => {

        let from = location.state?.from?.pathname || '/';
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigateRegister = e => {
        navigate('/register')
    }

    const resetPasswordHandle = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email verification sent');
        }
        else {
            toast('Please enter your email address');
        }
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
                        <p className='mt-2 '>Forget Password?<span className='text-primary px-2 ' style={{ cursor: 'pointer' }} onClick={resetPasswordHandle}>Click here to reset password</span></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Login;