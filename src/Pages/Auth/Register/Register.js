import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);



  // const navigate = useNavigate();


  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleFromInput = event =>{
    event.preventDefault();
    // console.log(event.target)
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log(email, password, confirmPassword);
  
    createUserWithEmailAndPassword(email, password, confirmPassword);
  }


    return (
        <div className='container w-50 mx auto'>
                <h1 className='text-center'>Please Register</h1>
                <Form onSubmit={handleFromInput}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Password" />
                     </Form.Group>

                     <p className="my-3">
                    Already have a account?
                    <span>
                  <Link to="/login" className="text-color">
                    Log in
                  </Link>
                </span>
              </p>

                     <Button className='btn card-button rounded-pill' type="submit">
                             Submit
                    </Button>
                </Form>
        </div>
    );
};

export default Register;    