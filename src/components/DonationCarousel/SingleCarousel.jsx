import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import Progress from "../Progress/Progress";

const SingleCarousel = ({ carousel }) => {
  const { image, category, title, text, count, amounts, accentColor } =
    carousel;
  return (
    <div className='item'>
      <div className='donations-card' style={{ "--accent-color": accentColor }}>
        <div className='donations-card__image'>
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            src={image}
            alt=''
          />

          <div className='donations-card__category'>
            <Link href='#'>{category}</Link>
          </div>
        </div>

        <div className='donations-card__content'>
          <h3 className='donations-card__title'>
            <Link href='donations-details'>{title}</Link>
          </h3>

          <p className='donations-card__text'>{text}</p>
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
    </div>
  );
};

export default SingleCarousel;
