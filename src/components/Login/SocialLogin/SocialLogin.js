import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/Firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let foundError;

    if (error) {

        foundError = <p className='text-danger'>Error: {error.message}</p>

    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '>
                </div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '>
                </div>
            </div>
            {foundError}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary '>
                    <img className='me-2 ' style={{ width: '30px' }} src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div>

    );
};

export default SocialLogin;