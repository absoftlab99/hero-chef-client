import React from 'react';
import cover from '../../images/cover.gif';
import chef from '../../images/chef.avif';

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
            <section className='bg-info bg-opacity-25'>
                <div className='container'>
                <div className="row">
                    <div className="col-8 my-auto">
                        <h1 className='text-info display-3 fw-bold ff-poppins'>I'm <span className='text-dark'>Abdullah Al Mahmud.</span></h1>

                        <p className='text-justify pe-5'>
                        I am a freelance culinary artist. During my long professional career, I have successfully worked in restaurants in different countries around the world. Now I have opened my online restaurant.<br></br> <b>Hero Chef</b> is a restaurant where people can order food of their choice online, and I take the order, prepare the food and deliver it to the customer's address very quickly. My customers can share their experience with my food on this website, there is also a facility to rate the quality of food/service.
                        </p>
                    </div>
                    <div className="col-4">
                        <img className='p-5 w-100' src={chef} alt="" />
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Home;