import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer className='bg-info p-3 mt-4'>
                <p className='text-center mb-0'>Copyright © 2022 <Link to='/'>Hero Chef</Link>.</p>
            </footer>
    );
};

export default Footer;