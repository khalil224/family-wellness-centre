import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="signup-container">
                    <div className="brand-title">SIGNUP</div>
                    <div className="inputs">
                        <label>YOUR NAME</label>
                        <input type="text" placeholder="Your Name" />
                        <label>EMAIL</label>
                        <input type="email" placeholder="Enter Your Email" required />
                        <label>PASSWORD</label>
                        <input type="password" placeholder="Min 6 charaters long" required />
                        <button className='signup-button' type="submit">SIGNUP</button>
                        <p className='mt-2 '>Already have an account?<span className='text-primary px-2 ' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Sign In here</span></p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Register;