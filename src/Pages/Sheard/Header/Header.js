import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiCodechef } from "react-icons/si";

const Header = () => {
    return (
        <div>
            <Navbar className='bg-info sticky fixed-top' expand="md">  
                <Container>  
                    <Navbar.Brand className='text-dark fw-bolder' as={Link} to="/"><SiCodechef></SiCodechef> Hero Chef</Navbar.Brand>  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                    <Navbar.Collapse id="basic-navbar-nav">  
                        <Nav className="ms-auto menu me-sm-auto">
                            <Nav.Link className='text-dark' as={Link} to='/home'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>  
            </Navbar>
        </div>
    );
};

export default Header;