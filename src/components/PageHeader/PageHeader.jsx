import React from "react";
import bg from "@/assets/images/backgrounds/page-header-1-1.jpg";
import { Container } from "react-bootstrap";
import Link from "next/link";

const PageHeader = ({ title = "", list = "" }) => {
  return (
    <section
      className='page-header'
      style={{ backgroundImage: ` url(${bg.src})` }}
    >
      <Container>
        <ul className='list-unstyled breadcrumb-one'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <span>{list ? list : title}</span>
          </li>
        </ul>
        <h2 className='page-header__title'>{title}</h2>
      </Container>
    </section>
  );
};

export default PageHeader;
