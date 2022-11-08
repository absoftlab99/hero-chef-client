import React from 'react';
import cover from '../../images/cover.gif';

const Home = () => {
    return (
        <div className='bg-light'>
            <div className="row container">
                <div className="col-9 my-auto ps-5">
                    <h1 className='display-3 fw-bolder ff-poppins'>It's time to test some</h1>
                    <h1 className='display-3 fw-bolder ff-poppins'><span className='text-info'>Special</span> items.</h1>
                </div>
                <div className="col-3 align-items-end">
                    <img height='400' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;