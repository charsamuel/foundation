"use client";
import { sidebar } from "@/data/BlogDetailsPage";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { posts, categories, tags } = sidebar;

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__single sidebar__single--search'>
        <form onSubmit={handleSubmit} action='#'>
          <input type='text' placeholder='Search here..' />
          <button type='submit'>
            <i className='paroti-icon-magnifying-glass'></i>
          </button>
        </form>
      </div>
      <div className='sidebar__single sidebar__single--posts'>
        <h3 className='sidebar__title'>Recent posts</h3>
        <ul className='list-unstyled sidebar__post'>
          {posts.map(({ id, title, image, comments }) => (
            <li key={id}>
              <Link href='#'>
                <Image src={image} alt='' />

                <span className='sidebar__post__meta'>
                  <i>
                    <FontAwesomeIcon icon={faComments} />
                  </i>
                  {comments} comments
                </span>
                <span className='sidebar__post__title'>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__single sidebar__single--lists'>
        <h3 className='sidebar__title'>Categories</h3>
        <ul className='list-unstyled sidebar__lists'>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href='#'>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__single sidebar__single--tags'>
        <h3 className='sidebar__title'>Tags</h3>
        <p className='sidebar__tags'>
          {tags.map((tag, index) => (
            <Link key={index} href='#'>
              {tag}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
