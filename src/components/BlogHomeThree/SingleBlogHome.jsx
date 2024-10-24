import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlogHome = ({ carousel, index }) => {
  const { image, date, lists, title, link, linkIcon, linkText } = carousel;
  return (
    <div className='item' id={`blog-carousel-1-item${index}`}>
      <div className='blog-card'>
        <div className='blog-card__image'>
          <Image src={image} alt='' />

          <div className='blog-card__date'>
            <span>{date.day}</span>
            {date.month}
          </div>
        </div>

        <div className='blog-card__content'>
          <ul className='blog-card__meta list-unstyled'>
            {lists.map((list) => (
              <li key={list.id}>
                <i>
                  <FontAwesomeIcon icon={list.icon} />
                </i>
                <Link href='#'>{list.cont}</Link>
              </li>
            ))}
          </ul>

          <h3 className='blog-card__title'>
            <Link href={link}>{title}</Link>
          </h3>

          <Link href={link} className='blog-card__links'>
            <i>
              <FontAwesomeIcon icon={linkIcon} />
            </i>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHome;
