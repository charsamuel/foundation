import footerData from "@/data/FooterData";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { footerBg, logo, about, links, nonProfit, contacts, icons } = footerData;

const Footer = () => {
  return (
    <footer
      className='site-footer'
      style={{ backgroundImage: `url(${footerBg.src})`, color: "#ffffff" }}
    >
      <div className='site-footer__top'>
        <Container>
          <Row>
            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={3}
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-delay='000'
            >
              <div className='site-footer__widget site-footer__widget__about'>
                <Link href='/' className='site-footer__widget__logo'>
                  <Image src={logo} alt='' width={187} height={99} />
                </Link>
                <p style={{color: "#ffffff"}} className='site-footer__widget__text'>{about}</p>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
              data-aos-delay='100'
            >
              <div className='site-footer__widget'>
                <h3 className='site-footer__widget__title'>Links</h3>

                <ul className='list-unstyled site-footer__widget__links'>
                  {links.map((link) => (
                    <li key={link.id}>
                      <a style={{color: "#ffffff"}} href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
              data-aos-delay='200'
            >
              <div className='site-footer__widget'>
                <h3 className='site-footer__widget__title'>Non Profit</h3>

                <ul className='list-unstyled site-footer__widget__links'>
                  {nonProfit.map((profit) => (
                    <li key={profit.id} style={{color: "#ffffff"}}>
                      <Link href={profit.link}>{profit.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={3}
              className='col-sm-12 col-md-6 col-lg-6 col-xl-3'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
              data-aos-delay='300'
            >
              <div className='site-footer__widget'>
                <h3 className='site-footer__widget__title'>Contact</h3>

                <ul className='list-unstyled site-footer__widget__contact'>
                  {contacts.map((contact) => (
                    <li key={contact.id} style={{color: "#ffffff"}}>
                      <i>
                        <FontAwesomeIcon icon={contact.icon} />
                      </i>
                      <Link href={`${contact.subHref}:${contact.title}`}>
                        {contact.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
              data-aos-delay='400'
            >
              <div className='site-footer__widget site-footer__widget__cta'>
                <h3 className='site-footer__widget__title'>
                  <span>Raise Money and help them</span>
                </h3>

                <Link
                  href='donations-details'
                  className='thm-btn thm-btn--two thm-btn--light'
                >
                  <span>Donate Now</span>
                  <i>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='site-footer__bottom'>
        <Container>
          <div className='site-footer__bottom__inner'>
            <p className='site-footer__bottom__text'>
              © Copyright <span className='dynamic-year'></span> by
              Alinur Foundation
            </p>

            <div className='site-footer__social'>
              {icons.map((icon) => (
                <Link href={icon.href} key={icon.id}>
                  <FontAwesomeIcon icon={icon.icon}></FontAwesomeIcon>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
