import Image from "next/image";
import React from "react";

const SingleTestimonialOne = ({ carousel }) => {
  const { icon, text, name, desig, itemImage, cardImage } = carousel;
  return (
    <div className='item'>
      <div className='testimonials-card'>
        {/* <i className={icon}></i> */}
        {/* <Image className='testimonials-card__bg' src={itemImage} alt='' /> */}

        <p className='testimonials-card__text'>{text}</p>

        <div className='testimonials-card__meta clearfix'>
          <Image src={cardImage} alt='' style={{width: 70}} />

          <h3 className='testimonials-card__name'>{name}</h3>

          <p className='testimonials-card__designation'>{desig}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialOne;
