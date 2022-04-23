import Head from 'next/head';
import Image from 'next/image';
import React from "react";
// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation]);

// Import Swiper styles
import 'swiper/css';


// components .....
import Header from '../components/header';
import Footer from '../components/footer';


// importing banner images .....
import bannerOne from '../public/images/bannerOne.jpg';
import BannerTwo from '../public/images/BannerTwo.jpg';
import BannerThree from '../public/images/BannerThree.jpg';

export default function Home() {
  const navigationPrevRef = React.useRef();
  const navigationNextRef = React.useRef();
  
  return (
    <div  >
      
    <Header/>
   
      {/* Banner Section ..... */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image height={2000} src={bannerOne}  alt="Picture of the author" />
          </div>
          <div className="carousel-item">
            <Image height={2000} src={BannerTwo}  alt="Picture of the author" />
          </div>
          <div className="carousel-item">
            <Image height={2000} src={BannerThree}  alt="Picture of the author" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* Featured Product Section ..... */}
      <div className="container my-5 p-5">
        <h1 className='text-center my-3 fw-light'>Featured Product</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
                   
        >
          <SwiperSlide>
            <div className="card shadow" style={{ width: '100%' }}>
              <Image  src={bannerOne} className="card-img-top" alt="Picture of the author" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mx-auto">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow" style={{ width: '100%' }}>
              <Image src={bannerOne} className="card-img-top" alt="Picture of the author" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mx-auto">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow" style={{ width: '100%' }}>
              <Image src={bannerOne} className="card-img-top" alt="Picture of the author" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mx-auto">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow" style={{ width: '100%' }}>
              <Image src={bannerOne} className="card-img-top" alt="Picture of the author" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mx-auto">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>
 
 
            {/* Slider Controlllers ..... */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          <div ref="{navigationPrevRef}"/>
            <div ref="{navigationNextRef}"/>
           

        </Swiper>
      </div>

    
    </div>
  )
}
