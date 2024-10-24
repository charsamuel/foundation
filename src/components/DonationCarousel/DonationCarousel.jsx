"use client";
// import "./SliderTwo.css";
import "tiny-slider/dist/tiny-slider.css";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

import { Container } from "react-bootstrap";
import donationCarouserData from "@/data/DonationCarouselData";
import SingleCarousel from "./SingleCarousel";

const DonationCarousel = () => {
  const { tagLine, title, carouselData } = donationCarouserData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    container: "#donations-carousel-1",
    loop: true,
    autoplay: true,
    items: 1,
    gutter: 0,
    mouseDrag: true,
    touch: true,
    nav: true,
    autoplayButtonOutput: false,
    controls: false,
    responsive: {
      0: {
        items: 1,
        gutter: 0,
      },
      576: {
        items: 1,
        gutter: 0,
      },
      768: {
        items: 2,
        gutter: 30,
      },
      992: {
        items: 2,
        gutter: 30,
      },
      1200: {
        items: 3,
        gutter: 30,
      },
    },
  };

  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        <div className='sec-title'>
          <p className='sec-title__tagline'>{tagLine}</p>

          <h2 className='sec-title__title'>{title}</h2>
        </div>
        <div className='donations-carousel'>
          <TinySlider
            className='thm-tns__carousel'
            id='donations-carousel-1'
            settings={settings}
          >
            {carouselData.map((carousel) => (
              <SingleCarousel key={carousel.id} carousel={carousel} />
            ))}
          </TinySlider>
        </div>
      </Container>
    </section>
  );
};

export default DonationCarousel;
