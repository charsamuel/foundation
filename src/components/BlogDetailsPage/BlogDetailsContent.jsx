import { faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Author from "./Author";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import blogDetailsPage from "@/data/BlogDetailsPage";
const {
  image,
  date,
  author,
  totalComments,
  title,
  texts,
  tags,
  socials,
  authorData,
  comments,
} = blogDetailsPage;

const BlogDetailsContent = () => {
  return (
    <>
      <div className='blog-details__content clearfix'>
        <div className='blog-details__image'>
          <Image src={image} alt='' />

          <div className='blog-card__date'>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
              </Fragment>
            ))}
          </div>
        </div>
        <ul className='blog-card__meta list-unstyled'>
          <li>
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
            <Link href='#'>by {author}</Link>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faComments} />
            </i>
            <Link href='#'>{totalComments} comments</Link>
          </li>
        </ul>
        <h3 className='blog-card__title'>{title}</h3>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className='blog-details__bottom'>
        <p className='blog-details__tags'>
          <span>Tags</span>
          {tags.map((tag, i) => (
            <Link key={i} href='#'>
              {tag}
            </Link>
          ))}
        </p>
        <div className='blog-details__social'>
          {socials.map(({ id, icon, href }) => (
            <a href={href} key={id}>
              <i>
                <FontAwesomeIcon icon={icon} />
              </i>
            </a>
          ))}
        </div>
      </div>
      <Author author={authorData} />
      <Comments comments={comments} />
      <CommentsForm />
    </>
  );
};

export default BlogDetailsContent;
