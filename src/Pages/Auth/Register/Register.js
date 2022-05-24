import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister =  event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        createUserWithEmailAndPassword(email, password);
    }

  
    return (
        <div className='register-form'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}> 
                <input type='text' name='name' id='' placeholder='your name'/><br/>
                <input type='email' name='email' id='' placeholder ='Email address' required/> <br/>
                <input type='password' name='password' id='' placeholder='password' required/><br/>
                <input type='submit' value='Register' />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default Register;