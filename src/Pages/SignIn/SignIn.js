import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import login from '../../images/login.gif';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const {signInUser, user, setUser, error, setError, googlePopUp} = useContext(AuthContext);
    
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate();

    const loginHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true });
            setError('');
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
    }

    const googlePopLogin = (event) =>{
        event.preventDefault();
        googlePopUp(provider)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='container p-5'>
            <div className="row w-75 mx-auto">
                <div className="col-6 border-end">
                    <h2 className='text-center ff-poppins'>Login Form</h2>
                    <img className='img-fluid' src={login} alt="" />
                </div>
                <div className="col-6 p-5 ff-poppins my-auto">
                    <Form onSubmit={loginHandler}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        {error ? <p className="alert alert-danger">{error}</p> : ""}
                        {!error && user ? (
                            <p className="alert alert-success">
                            Login Successfully!!
                            </p>
                        ) : (
                            ""
                        )}
                        <Button variant="info" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <hr className='w-75 m-auto border-info mt-3'></hr>
                    <div className='text-center mt-2'>
                        <Button onClick={googlePopLogin} className='w-50' variant='light'><FcGoogle></FcGoogle></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;