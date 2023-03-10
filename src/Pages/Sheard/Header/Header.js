import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import logo from '../../../images/logo.gif';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const signOutHandler = () =>{
        logOut();
    }
    return (
        <div>
            <Navbar className='bg-info sticky fixed-top ff-poppins' expand="md">  
                <Container>  
                    <Navbar.Brand className='text-dark fw-bolder' as={Link} to="/">
                    <img className='mt-0' height='50px' src={logo} alt="" /> <span className='fw-bold fs-5'>Hero Chef</span>
                    </Navbar.Brand>  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                    <Navbar.Collapse id="basic-navbar-nav">  
                        <Nav className="ms-auto">
                            <Nav.Link className='text-dark' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to='/blog'>Blog</Nav.Link>
                            
                            {
                                user ?
                                <>
                                <Nav.Link className='text-dark' as={Link} to='/my-reviews'>My Reviews</Nav.Link>
                                <Nav.Link className='text-dark' as={Link} to='/add-service'>Add Service</Nav.Link>
                                <Nav.Link onClick={signOutHandler} className='text-danger fw-bolder'>Log Out</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link className='text-dark' as={Link} to='/login'>Login</Nav.Link>
                                    <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
                                </>
                            }

                            <div className='d-flex align-items-center'>
                                {
                                    user?.uid ? 
                                    <PhotoProvider>
                                        <PhotoView src={user?.photoURL}>
                                        <Image className="border border-success m-auto me-2" style={{ height: "45px", width: "45px" }} roundedCircle src={user?.photoURL}></Image>
                                        </PhotoView>
                                    </PhotoProvider> : ''
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>  
            </Navbar>
        </div>
    );
};

export default Header;