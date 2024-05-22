import React from "react";
import "./Testimonials.css";
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

SwiperCore.use([Pagination, Navigation]);

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      name: "John Doe",
      review:"I had an amazing experience with this company. ",
      role: "CEO",
      rating: 5,
    },
    {
      img: profilePic2,
      name: "Jane Smith",
      role: " Manager",
      review:"I had an amazing experience with this company.",
      rating: 4,
    },
    {
      img: profilePic3,
      name: "Michael ",
      role: " Director",
      review:"I had an amazing experience with this company.",
      rating: 5,
    },
    {
      img: profilePic4,
      name: "Sarah Adams",
      role: " Engineer",
      review:"I had an amazing experience with this company.",
      rating: 4.5,
    },
  ];

  return (
    <div className="testimonial-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">

              <div className="prf-img"><img src={client.img} alt={client.name} /></div>

              <div className="prf-info">
                <h3>{client.name}</h3>
                <p>{client.role}</p>
              </div>

              <div className="prf-para"><h5>{client.review}</h5></div>
                
              <div className="prf-rating">
                  {Array.from({ length: client.rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

              <div className="social-icons">
                  <FaFacebook className="icon1" />
              </div>

              <div className="social-icons">
                  <FaLinkedin className="icon2" />
              </div>
            </div>
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
