import { donationsDetails } from "@/data/DonationDetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetails = () => {
  const { commentsTitle, comments } = donationsDetails;
  return (
    <div className='blog-details__comments'>
      <h3 className='blog-details__sec__title'>{commentsTitle}</h3>
      <ul className='list-unstyled blog-details__comments__list'>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Image src={comment.image} alt='' />

            <div className='blog-details__comments__meta'>
              <h3 className='blog-details__comments__name'>{comment.name}</h3>

              <p className='blog-details__comments__date'>{comment.date}</p>
            </div>
            <p className='blog-details__comments__text'>{comment.text}</p>

            <Link href='#' className='thm-btn blog-details__comments__btn'>
              <span>{comment.btnText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
