"use client";
import React from "react";
import newsLetterBg from "@/assets/images/backgrounds/newsletter-1-1.jpg";
import Image from "next/image";
// import newsLetterOne from "@/assets/images/shapes/newsletter-1-1.jpg";
// import newsLetterTwo from "@/assets/images/shapes/newsletter-1-2.jpg";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsLetterForm from "./NewsLetterForm";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const NewsLetterOne = () => {

  return (
    <section className='newsletter-one'>
      <div
        className='newsletter-one__bg'
        style={{ backgroundImage: `url(${newsLetterBg.src})` }}
      ></div>

      {/* <div className='newsletter-one__shape float-bob-x'>
        <Image src={newsLetterOne} alt='' />
      </div> */}

      <Container>
        {/* <div className='newsletter-one__icon float-bob-y'>
          <Image src={newsLetterTwo} alt='' />
        </div> */}

        <Row>
          <Col lg={7}>
            <div className='sec-title'>
              <p className='sec-title__tagline'>Wordwide non-profit charity</p>

              <h2 className='sec-title__title'>
                Give a helping hand for <br />
                needy People
              </h2>
            </div>

            <MailchimpSubscribe
              url={url}
              render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                  <NewsLetterForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />
                )
              }

              }

            />


            <div className='mc-response'></div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default NewsLetterOne;
