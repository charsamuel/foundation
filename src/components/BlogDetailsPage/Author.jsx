import Image from "next/image";
import React from "react";

const Author = ({ author = {} }) => {
  const { image, name, description } = author;
  return (
    <div className='blog-details__author clearfix'>
      <Image src={image} alt='' />

      <h3 className='blog-details__author__name'>{name}</h3>
      <p className='blog-details__author__bio'>{description}</p>
    </div>
  );
};

export default Author;
