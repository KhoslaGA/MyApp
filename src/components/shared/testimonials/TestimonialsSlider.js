"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsSlide2 from "./TestimonialsSlide2";
import testimonialSmallImage3 from "@/assets/img/testimonial/testimonial__small__img__3.png";
import testimonialImage3 from "@/assets/img/testimonial/Parnpreet_Virk.png";
import testimonialImage4 from "@/assets/img/testimonial/Rick_Ohri.png";
import testimonialImage5 from "@/assets/img/testimonial/Akash_Arora.png";
import { Navigation } from "swiper/modules";
const TestimonialsSlider = () => {
  const slides = [
    {
      id: 1,
      name: "Parnpreet Virk",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "CEO,Waste Collections",
      desc: "WebHub4U has been instrumental in boosting our online presence. Their expertise in social media strategy helped us reach a broader audience effectively. The team is professional, proactive, and truly understands our business needs. I highly recommend their services",
    },
    {
      id: 2,
      name: "Rick Ohri",
      img: testimonialImage4,
      imgSmall: testimonialSmallImage3,
      desig: "Realtor 7torontoproperty.com",
      desc: "“Working with WebHub4U has been an amazing experience. Their deep understanding of social media helped elevate my brand’s visibility, and I've seen a significant increase in engagement with my clients. Their service is professional, reliable, and delivers fantastic results. Highly recommend!”",
    },
    {
      id: 3,
      name: "Akash Arora",
      img: testimonialImage5,
      imgSmall: testimonialSmallImage3,
      desig: "CEO & Founder, Volta Auto Parts",
      desc: "“The team at WebHub4U provided excellent support in managing our social media campaigns. Their expertise helped us grow our brand and connect with our target audience in a meaningful way. They are dedicated, insightful, and always go the extra mile. Highly recommend their services!”",
    },
    {
      id: 4,
      name: "Parnpreet Virk",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "CEO,Waste Collections",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "Rick Ohri",
      img: testimonialImage4,
      imgSmall: testimonialSmallImage3,
      desig: "Realtor 7torontoproperty.com",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      name: "Akash Arora",
      img: testimonialImage5,
      imgSmall: testimonialSmallImage3,
      desig: "CEO & Founder, Volta Auto Parts",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <Swiper
      className="testimonial__slider__active__2 position-static"
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1,
        },

        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      }}
      wrapperClass="testimonial__2__wrap"
    >
      {slides?.map((testimonial, idx) => (
        <SwiperSlide className="col-md-3 testimonial__single__slider" key={idx}>
          <TestimonialsSlide2 slide={testimonial} />
        </SwiperSlide>
      ))}

      <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
        <div className="swiper-button-next arrow-btn arrow-btn-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="swiper-button-prev arrow-btn arrow-btn-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12H3.67"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Swiper>
  );
};

export default TestimonialsSlider;
