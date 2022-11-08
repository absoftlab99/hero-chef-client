import React from 'react';
import { Button, Form } from 'react-bootstrap';
import login from '../../images/login.gif';

const SignIn = () => {
    return (
        <div className='container p-5'>
            <div className="row w-75 mx-auto">
                <div className="col-6 border-end">
                    <h2 className='text-center ff-poppins'>Login Form</h2>
                    <img className='img-fluid' src={login} alt="" />
                </div>
                <div className="col-6 p-5 ff-poppins my-auto">
                    <Form>
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
                        <Button variant="info" type="submit">
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;