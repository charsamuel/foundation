import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = ({ comments = [] }) => {
  return (
    <div className='blog-details__comments'>
      <h3 className='blog-details__sec__title'>{comments.length} Comments</h3>
      <ul className='list-unstyled blog-details__comments__list'>
        {comments.map(({ id, image, name, message, date }) => (
          <li key={id}>
            <Image src={image} alt='' />

            <div className='blog-details__comments__meta'>
              <h3 className='blog-details__comments__name'>{name}</h3>

              <p className='blog-details__comments__date'>{date}</p>
            </div>
            <p className='blog-details__comments__text'>{message}</p>

            <Link href='#' className='thm-btn blog-details__comments__btn'>
              <span>Reply</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
