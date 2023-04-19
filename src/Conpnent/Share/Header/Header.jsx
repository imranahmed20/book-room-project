import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='fw-bold fs-4' href="#">Room Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none me-3' to="/">Home</Link>
                        <Link className='text-decoration-none me-3' to="/about">About</Link>
                        <Link className='text-decoration-none me-3' to="/login">Login</Link>
                        <Link className='text-decoration-none me-3' to="/register">Register</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="success">LogOut</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;