import Head from 'next/head';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


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
      <div className="container my-5">
        <h1 className='text-center fw-light'>Featured Product</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card" style={{ width: '23rem' }}></div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>

    
    </div>
  )
}
