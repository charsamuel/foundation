import ctaFourData from "@/data/CtaFourData";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CtaFour = () => {
  return (
    <section className='cta-four'>
      <Container fluid>
        <Row>
          {ctaFourData.map((ctaData) => (
            <Col key={ctaData.id} lg={4}>
              <div
                className='cta-four__item'
                style={{ "--accent-color": ctaData.accentColor }}
              >
                <div
                  className='cta-four__item__bg'
                  style={{ backgroundImage: `url(${ctaData.bg.src})` }}
                ></div>

                <div className='cta-four__item__icon'>
                  <i className={ctaData.icon}></i>
                </div>

                <h3 className='cta-four__item__title'>
                  <Link href='contact'>{ctaData.title}</Link>
                </h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CtaFour;
