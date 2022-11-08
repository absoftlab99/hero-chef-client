import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.gif';

const Header = () => {
    return (
        <div>
            <Navbar className='bg-info sticky fixed-top ff-poppins' expand="md">  
                <Container>  
                    <Navbar.Brand className='text-dark fw-bolder' as={Link} to="/">
                    <img className='mt-0' height='50px' src={logo} alt="" /> <span className='fw-bold fs-5'>Hero Chef</span>
                    </Navbar.Brand>  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                    <Navbar.Collapse id="basic-navbar-nav">  
                        <Nav className="ms-auto menu me-sm-auto">
                            <Nav.Link className='text-dark' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>  
            </Navbar>
        </div>
    );
};

export default Header;