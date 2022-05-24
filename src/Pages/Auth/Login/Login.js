import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

function Login() {

        const emailRef = useRef("");
        const passwordRef = useRef("");
        const navigate = useNavigate();
        const location = useLocation();

        let from = location.state?.from?.pathname || "/";

        let errorElement;
    const [
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

     if (user) {
      navigate(from, { replace: true });
    }

     if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
        const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            console.log(email, password );
        }

        const navigateRegister = event => {
          navigate('/register');
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
            <h6 className="my-3">
                Forget Password?
                <span>
                  <Link
                    to="/login"
                    className="text-color"
                  >
                    Reset Password
                  </Link>
                </span>
              </h6>
              <h6 className="my-3">
                Don't have a account?
                <span>
                  <Link to="/register" onClick={navigateRegister} className="text-color">
                    Register
                  </Link>
                </span>
              </h6>
              {errorElement}
                 <Button className='btn card-button rounded-pill' type="submit">
                 Login
                     </Button>
            </Form> 
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Login;
