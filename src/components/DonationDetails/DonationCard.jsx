import { donationsDetails } from "@/data/DonationDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import Progress from "../Progress/Progress";

const DonationCard = () => {
  const {
    title,
    accentColor,
    amounts,
    category,
    count,
    image,
    presentation,
    bottom,
    content,
  } = donationsDetails;
  return (
    <div className='donations-details'>
      <div className='donations-card' style={{ "--accent-color": accentColor }}>
        <div className='donations-card__image'>
          <Image src={image} alt='' />

          <div className='donations-card__category'>
            <Link href='#'>{category}</Link>
          </div>
        </div>
        <div className='donations-card__content'>
          <Progress percent={count} />

          <div className='donations-card__amount'>
            {amounts?.map((amount) => (
              <p key={amount.id}>
                <span>${amount.amount}</span> {amount.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h3 className='donations-card__title'>{title}</h3>
      <div className='donations-details__content'>
        {content.texts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <h3 className='donations-card__title'>{content.title}</h3>
        <p>{content.text3}</p>
        <ul className='list-unstyled donations-details__list'>
          {content.lists.map((list) => (
            <li key={list.id}>
              <i>
                <FontAwesomeIcon icon={list.icon} />
              </i>
              {list.text}
            </li>
          ))}
        </ul>
        <p>{content.text4}</p>
        <br />
        <Row>
          <Col md={6}>
            <Image src={content.donation1} alt='' />
          </Col>
          <Col md={6}>
            <Image src={content.donation2} alt='' />
          </Col>
        </Row>
      </div>
      <div className='donations-details__bottom'>
        <Link href={bottom.btnLink} className='thm-btn donations-details__btn'>
          <span>{bottom.btnText}</span>
        </Link>
        <div className='donations-details__social'>
          {bottom.socials.map((social, i) => (
            <Link key={i} href='#'>
              <i>
                <FontAwesomeIcon icon={social} />
              </i>
            </Link>
          ))}
        </div>
      </div>
      <div className='donations-details__presentation'>
        <i className={presentation.icon}></i>
        <h3 className='donations-details__presentation__title'>
          {presentation.title}
        </h3>

        <Link
          href={presentation.btnLink}
          className='thm-btn donations-details__presentation__btn'
        >
          <span>{presentation.btnText}</span>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
