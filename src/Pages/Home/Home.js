import React, { useEffect, useState } from 'react';
import cover from '../../images/cover.gif';
import chef from '../../images/chef.avif';
import Service from '../Service/Service';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import putin from '../../images/putin.png';
import elon from '../../images/elon.jpg';
import bil from '../../images/bil.jpg';
import trump from '../../images/trump.jpg';
import mark from '../../images/mark.webp';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://service-review-server-six.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

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
                
            <section className='mb-5'>
                <h1 className='text-center ff-poppins fw-bold pt-5'>Some <span className='text-info'>SPECIAL</span> Food Made by Me</h1>
                <div className="row container mx-auto pt-4">
                    {
                        services.map(service => <Service
                        key={service._id}
                        service={service}
                        ></Service>)
                    }
                </div>
            </section>
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
            <section className='container m-auto mt-5 mb-5'>
                <div className="">
                <h1 className='text-center pb-3 ff-poppins fw-bold'>Some <span className='text-info'>HIGH</span> 
                Profile Customer</h1>
                <p className='text-center px-5'>
                All the famous dignitaries of the world like Vladimir Putin, Donald Trump, Elon Musk, Bill Gates and Mark Zuckerberg cannot imagine starting their day without my cooked food. These are my high profile customers
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide>
                        <Card>
                            <Card.Img height='150' variant="top" src={putin}/>
                            <Card.Body>
                                <Card.Title>Vladimir Putin</Card.Title>
                                <Card.Text>
                                President of Russia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Card.Img height='150' variant="top" src={elon}/>
                            <Card.Body>
                                <Card.Title>Elon Musk</Card.Title>
                                <Card.Text>
                                CEO Tesla & Twitter
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Card.Img height='150' variant="top" src={mark}/>
                            <Card.Body>
                                <Card.Title>Mark Zuckerberg</Card.Title>
                                <Card.Text>
                                CEO of Meta
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Card.Img height='150' variant="top" src={trump}/>
                            <Card.Body>
                                <Card.Title>Donal Trump</Card.Title>
                                <Card.Text>
                                Former President of USA
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Card.Img height='150' variant="top" src={bil}/>
                            <Card.Body>
                                <Card.Title>Vladimir Putin</Card.Title>
                                <Card.Text>
                                President of Russia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Home;