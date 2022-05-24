import React from 'react';
import google from '../../../image/social/google.png';
import facebook from '../../../image/social/facebook.png';
import github from '../../../image/social/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if(error){
        
           errorElement = <div>
                <p>
                    Error:{error.message}
                </p>
            </div>
        
    }
    if(user){
        navigate('/home');
    }

    return (
        <div className='mt-3'>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => singInWithGoogle()} 
                className='btn card-button w-50 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>SingIn With Google</span>
                </button>
                <button className='btn card-button w-50 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-2'>SingIn With Google</span>
                </button>
                <button className='btn card-button w-50 d-block mx-auto'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>SingIn With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;