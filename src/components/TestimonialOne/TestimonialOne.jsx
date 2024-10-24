"use client";
import testimonialOneData from "@/data/TestimonialOneData";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCarousel from "../DonationCarousel/SingleCarousel";
import dynamic from "next/dynamic";
import SingleTestimonialOne from "./SingleTestimonialOne";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  container: "#testimonials-one-carousel-1",
  loop: true,
  autoplay: true,
  items: 1,
  gutter: 0,
  mouseDrag: true,
  touch: true,
  nav: false,
  autoplayButtonOutput: false,
  controls: false,
};

const TestimonialOne = ({ page }) => {
  const {
    bg,
    testi1,
    testi2,
    testi3,
    testi4,
    testi5,
    tagLine,
    text,
    title,
    carouselData,
  } = testimonialOneData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className={`sec-pad-top testimonials-one ${page ? "sec-pad-bottom" : "testimonials-one--bottom-pd-lg"}`}>
      <div
        className='testimonials-one__bg'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className='testimonials-one__gallery'>
        <Image className='float-bob-x' src={testi1} alt='' style={{width: 50}} />
        <Image className='float-bob-y' src={testi2} alt='' style={{width: 50}}/>
        <Image className='float-bob-x' src={testi3} alt='' style={{width: 50}}/>
        <Image className='float-bob-y' src={testi4} alt='' style={{width: 50}}/>
        <Image className='float-bob-x' src={testi5} alt='' style={{width: 50}}/>
      </div>
      <Container>
        <Row className='gutter-y-60'>
          <Col lg={5}>
            <div className='testimonials-one__content'>
              <div className='sec-title'>
                <p className='sec-title__tagline'>{tagLine}</p>

                <h2 className='sec-title__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>

              <p className='testimonials-one__text'>
                {text.split("\n").map((t, i) => (
                  <Fragment key={i}>
                    {t} <br />
                  </Fragment>
                ))}
              </p>

              <Link href='#' className='thm-btn testimonials-one__btn'>
                <span>View all feedbacks</span>
              </Link>
            </div>
          </Col>
          <Col lg={7}>
            <TinySlider
              className='thm-tns__carousel'
              id='testimonials-one-carousel-1'
              settings={settings}
            >
              {carouselData.map((carousel) => (
                <SingleTestimonialOne key={carousel.id} carousel={carousel} />
              ))}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
