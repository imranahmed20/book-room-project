import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        if (password != confirm) {
            setError("Your password did not match")
            return
        }
        else if (password.length < 6) {
            setError("Password most be 6 character")
            return
        }
        createUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
            })
            .catch(error => setError(error.message))

    }
    return (
        <div className='card p-3 w-50 mx-auto mt-5 mb-5'>
            <h1 className='text-center text-primary mb-5 fw-bold'>Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <p>{error}</p>
            <p className='mt-3'><small>Already have an account <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Register;