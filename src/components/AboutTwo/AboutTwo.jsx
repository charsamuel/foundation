"use client";
import React, { useState } from "react";
// import about2_1 from "@/assets/images/backgrounds/slider-1-4.jpeg";
import about2_1_resourse from "@/assets/images/resources/about-1-1.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";

const AboutTwo = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className='sec-pad-top sec-pad-bottom about-two'>
      {/* <Image src={about2_1} className='about-two__shape-1 float-bob-x' alt='' /> */}

      <Container>
        <Row className='gutter-y-60'>
          <Col md={12} lg={6}>
            {" "}
            <div className='about-two__image'>
              <div className='about-two__image__shape-1'></div>
              {/* /.about-two__image__shape-1    */}
              <div className='about-two__image__shape-2'></div>
              {/* /.about-two__image__shape-2    */}
              <div className='about-two__image__shape-3'></div>
              {/* /.about-two__image__shape-3    */}

              <Image
                src={about2_1_resourse}
                className='img-h-auto'
                data-aos='fade-right'
                data-aos-easing='linear'
                data-aos-duration='1500'
                alt=''
              />

              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className='about-two__image__caption'>
                  <h3 className='about-two__image__caption__count count-box'>
                    {counterOn && (
                      <CountUp className='count-text' end={30} duration={1.5} />
                    )}
                    +
                  </h3>
                  {/* /.about-two__image__caption__count count-box    */}
                  <p className='about-two__image__caption__text'>
                    Years of work expeirece
                  </p>
                  {/* /.about-two__image__caption__text    */}
                </div>
              </ScrollTrigger>

              {/* /.about-two__image__caption    */}
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className='about-two__content'>
              <div className='sec-title'>
                <p className='sec-title__tagline'>Welcome to Alinur Foundation</p>

                <h2 className='sec-title__title'>
                  Make your goals to help people
                </h2>
              </div>

              <p className='about-two__text'>
              Empowering your mission to uplift lives. Many stories exist about giving back, but most have been shaped by unique experiences, genuine compassion, or inspiring actions.
              </p>

              <ul className='list-unstyled about-two__info'>
                <li className='about-two__info__item'>
                  <i className='paroti-icon-sponsor'></i>
                  <h3 className='about-two__info__title'>
                    Let’s sponsor an entire project
                  </h3>
                </li>
                <li
                  className='about-two__info__item'
                  style={{ "--accent-color": "#8139e7" }}
                >
                  <i className='paroti-icon-solidarity'></i>
                  <h3 className='about-two__info__title'>
                    Donate to the new cause
                  </h3>
                </li>
              </ul>

              <ul className='list-unstyled about-two__list'>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  If you're looking to make a difference, choose a cause that resonates with you.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  There are many opportunities to give, but the impact depends on the heart behind it.
                </li>
              </ul>

              <div className='about-two__btns'>
                <Link href='about' className='thm-btn about-two__btn'>
                  <span>Discover More</span>{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
