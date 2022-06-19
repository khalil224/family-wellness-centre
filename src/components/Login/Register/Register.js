import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //git path check korteci
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();



    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="signup-container">
                    <div className="brand-title">SIGNUP</div>
                    <div className="inputs">
                        <label>YOUR NAME</label>
                        <input ref={nameRef} type="text" placeholder="Your Name" />
                        <label>EMAIL</label>
                        <input ref={emailRef} type="email" placeholder="Enter Your Email" required />
                        <label>PASSWORD</label>
                        <input ref={passwordRef} type="password" placeholder="Enter your password" required />

                        <button className='signup-button' type="submit">SIGNUP</button>
                        <p className='mt-2 '>Already have an account?<span className='text-primary px-2 ' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Sign In here</span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Register;