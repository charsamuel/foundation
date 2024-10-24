"use client";
import blogData from "@/data/BlogData";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
import SingleBlog from "./SingleBlog";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  container: "#blog-carousel-1",
  loop: true,
  autoplay: true,
  items: 1,
  gutter: 0,
  mouseDrag: true,
  touch: true,
  nav: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    0: {
      items: 1,
      gutter: 0,
    },
    576: {
      items: 1,
      gutter: 0,
    },
    768: {
      items: 2,
      gutter: 30,
    },
    992: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};

const Blog = () => {
  const { tagLine, title, carouselData } = blogData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        <div className='sec-title text-center'>
          <p className='sec-title__tagline'>{tagLine}</p>

          <h2 className='sec-title__title'>{title}</h2>
        </div>
        <div className='blog-carousel'>
          <TinySlider
            settings={settings}
            className='thm-tns__carousel'
            id='blog-carousel-1'
          >
            {carouselData.map((carousel) => (
              <SingleBlog key={carousel.id} carousel={carousel} />
            ))}
          </TinySlider>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
