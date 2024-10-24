'use client'
import donationPageData from "@/data/DonationPageData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Progress from "../Progress/Progress";

const DonationPage = () => {
  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        <Row className='gutter-y-30'>
          {donationPageData.map((data) => (
            <Col md={6} lg={4} key={data.id}>
              <div className='item'>
                <div className='donations-card'>
                  <div className='donations-card__image'>
                    <Image
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={data.image}
                      alt=''
                    />

                    <div className='donations-card__category'>
                      <Link href='#'>{data.category}</Link>
                    </div>
                  </div>

                  <div className='donations-card__content'>
                    <h3 className='donations-card__title'>
                      <Link href='donations-details'>{data.title}</Link>
                    </h3>

                    <p className='donations-card__text'>{data.text}</p>
                    <Progress percent={data.count} />

                    <div className='donations-card__amount'>
                      {data.amounts?.map((amount) => (
                        <p key={amount.id}>
                          <span>${amount.amount}</span> {amount.desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DonationPage;
