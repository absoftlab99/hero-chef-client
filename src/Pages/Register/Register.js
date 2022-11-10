import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import register from '../../images/register.gif';

const Register = () => {
    useTitle('Register')
    const {createUser, updateData, setUser, user, setError, error} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password, name, photo)
        .then((result) => {
            const user = result.user;
            updateData(name, photo);
            setUser(user);
            setError("");
            console.log(user);
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            setError(error.message);
        });
    };
    return (
        <div className='container p-5'>
            <div className="row w-75 mx-auto">
                <div className="col-6 border-end">
                    <h2 className='text-center ff-poppins'>Registration Form</h2>
                    <img className='img-fluid' src={register} alt="" />
                </div>
                <div className="col-6 p-5">
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Full Name<sup className='text-danger fs-6'>*</sup></Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter full name" required/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Photo URL<sup className='text-danger fs-6'>*</sup></Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Enter photo url" required/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address<sup className='text-danger fs-6'>*</sup></Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password<sup className='text-danger fs-6'>*</sup></Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree with Hero Chef privacy policy" required />
                        </Form.Group>
                        {error ? <p className="alert alert-danger">{error}</p> : ""}
                        {!error && user ? (
                            <p className="alert alert-success">
                            Successfully Registered!!
                            </p>
                        ) : (
                            ""
                        )}
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