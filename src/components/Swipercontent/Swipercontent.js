import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { FreeMode, Pagination } from "swiper";

// Import Images and Videos
import SwiperImage from "../../images/pic.jpg";
import SwiperImage1 from "../../images/pic1.jpg";
import SwiperImage2 from "../../images/pic2.jpg";

function Swipercontent() {
    return (
        <section className="section-4 my-5 pt-3 pb-5">
            {/* Titles */}
            <div className="top container p-5 pt-4">
                <h3>LOREM IPSUM</h3>
                <h1>LOREM IPSUM</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </p>
                <div>
                    <span>CTA 3</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path fill="#000" fillRule="nonzero" d="M11 24a.5.5 0 0 1-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 0 1 .707-.707l9 9a.5.5 0 0 1 0 .707l-9 9a.498.498 0 0 1-.354.146L11 24z"></path>
                    </svg>
                </div>
            </div>
            {/* Swiper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper px-2"
            >
                <SwiperSlide>
                    <div>
                        <img src={SwiperImage} className="image-fluid" />
                        <h2 className="my-4">LOREM 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
                        </p>
                        <div>
                            <span>LEER MÁS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path fill="#000" fillRule="nonzero" d="M11 24a.5.5 0 0 1-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 0 1 .707-.707l9 9a.5.5 0 0 1 0 .707l-9 9a.498.498 0 0 1-.354.146L11 24z"></path>
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={SwiperImage1} className="image-fluid" />
                        <h2 className="my-4">LOREM 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                        </p>
                        <div>
                            <span>LEER MÁS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path fill="#000" fillRule="nonzero" d="M11 24a.5.5 0 0 1-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 0 1 .707-.707l9 9a.5.5 0 0 1 0 .707l-9 9a.498.498 0 0 1-.354.146L11 24z"></path>
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={SwiperImage2} className="image-fluid" />
                        <h2 className="my-4">LOREM 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <div>
                            <span>LEER MÁS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path fill="#000" fillRule="nonzero" d="M11 24a.5.5 0 0 1-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 0 1 .707-.707l9 9a.5.5 0 0 1 0 .707l-9 9a.498.498 0 0 1-.354.146L11 24z"></path>
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Swipercontent;
