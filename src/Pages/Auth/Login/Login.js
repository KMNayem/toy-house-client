import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';

function Login() {

        const emailRef = useRef("");
        const passwordRef = useRef("");

        const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            console.log(email, password );
        }

    return (


        <div className='container w-50 mx auto'>
            <h1 className='text-center'>Please LogIn</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
             
            </Form.Group>
                 <Button className='btn card-button rounded-pill' type="submit">
                 Login
                     </Button>
            </Form> 
        </div>
    )
}

export default Login;
