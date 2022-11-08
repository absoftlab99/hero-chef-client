import React from 'react';
import cover from '../../images/cover.gif';

const Home = () => {
    return (
        <div className=''>
            <div className='bg-light'>
                <div className="row container m-auto">
                    <div className="col-7 my-auto">
                        <h1 className='display-4 fw-bolder ff-poppins'>It's time to test some</h1>
                        <h1 className='display-4 fw-bolder ff-poppins'><span className='text-info'>Special</span> items.</h1>
                    </div>
                    <div className="col-5 justify-content-end">
                        <img height='400' src={cover} alt="" />
                    </div>
                </div>
            </div>
                <h1 className='text-center ff-poppins pt-4'>Some special food made by me</h1>
        </div>
    );
};

export default Home;