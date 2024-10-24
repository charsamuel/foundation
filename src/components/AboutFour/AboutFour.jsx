"use client";
import aboutFourData from "@/data/AboutFourData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";

const AboutFour = () => {
  const [isOpen, setOpen] = useState(false);
  const {
    aboutShape,
    tagLine,
    title,
    aboutImage,
    icon,
    link,
    text,
    lists,
    videoId,
  } = aboutFourData;
  return (
    <section className='sec-pad-top sec-pad-bottom about-four'>
      <Image
        src={aboutShape}
        alt=''
        className='float-bob-x about-four__shape'
      />

      <Container>
        <div className='sec-title text-center'>
          <p className='sec-title__tagline'>{tagLine}</p>
          <h2 className='sec-title__title'>
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h2>
        </div>

        <Row className='gutter-y-60'>
          <Col md={12} lg={6}>
            <div
              className='about-four__image'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1500'
            >
              <Image src={aboutImage} alt='' />
              <Link
                href='#'
                onClick={() => setOpen(true)}
                className='video-popup about-four__video'
              >
                <i>
                  <FontAwesomeIcon icon={icon} />
                </i>
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className='about-four__content'>
              <div className='about-four__content__text'>{text}</div>

              <ul className='list-unstyled about-four__list'>
                {lists.map((list) => (
                  <li key={list.id} className='about-four__list__item'>
                    <i>
                      <FontAwesomeIcon icon={list.icon} />
                    </i>
                    <h3 className='about-four__list__title'>{list.title}</h3>

                    <p className='about-four__list__text'>{list.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </section>
  );
};

export default AboutFour;
