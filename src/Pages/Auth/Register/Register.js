import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container w-50 mx auto'>
                <h1 className='text-center'>Please Register</h1>
                <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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