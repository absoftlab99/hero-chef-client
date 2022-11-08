import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Header from '../Pages/Sheard/Header/Header';
import './main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="vh">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;