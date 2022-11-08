import React from 'react';
import { Button, Form } from 'react-bootstrap';
import register from '../../images/register.gif';

const Register = () => {
    return (
        <div className='container p-5'>
            <div className="row w-75 mx-auto">
                <div className="col-6 border-end">
                    <h2 className='text-center ff-poppins'>Registration Form</h2>
                    <img className='img-fluid' src={register} alt="" />
                </div>
                <div className="col-6 p-5 ff-poppins">
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter full name" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Enter photo url" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree with Hero Chef privacy policy" required />
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;