"use client";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import Topbar from "../Topbar/Topbar";
import { useRootContext } from "@/Provider/context";
import NavItems from "./NavItems";
import headerData from "@/data/HeaderData";
import Link from "next/link";
import useScroll from "@/hooks/uaeScroll";
import { usePathname } from "next/navigation";
const { navItems, main_logo } = headerData;

const Header = () => {
  const { handleToggle, toggleSearch } = useRootContext();
  const scrollTop = useScroll(130);

  const pathname = usePathname();

  return (
    <header
      className={`main-header ${pathname === "/home2"
        ? "main-header--three main-header--two"
        : pathname === "/home3"
          ? "main-header--three"
          : ""
        }`}
    >
      <Topbar />
      {/* className={'main-menu sticky-header'} */}
      <nav
        className={
          scrollTop
            ? `sticky-header  main-menu ${pathname === "/home2" || pathname === "/home3"
              ? "main-menu--three"
              : ""
            } sticky-header--cloned sticky-fixed slideInDown animated clearfix`
            : `sticky-header  main-menu ${pathname === "/home2"
              ? "main-menu--three"
              : pathname === "/home3"
                ? "main-menu--three"
                : ""
            } slideIn animated clearfix`
        }
      >
        <div className='container-fluid'>
          <Link href='/' className='main-header__logo'>

            <Image src={main_logo} width={127} height={49} alt='logo' />
          </Link>

          <ul className='main-menu__list'>
            {navItems.map((navItem) => (
              <NavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          <div className='main-menu__right'>
            <div className='main-menu__cta'>
              <div className='main-menu__cta__icon'>
                <i className='paroti-icon-volunteer'></i>
              </div>
              <div className='main-menu__cta__text'>
                <span>Join us now</span>
                <Link href='contact'>Become a Volunteer</Link>
              </div>
            </div>
            <Link href='donations-details' className='thm-btn thm-btn--two '>
              <span>Donate Now</span>
              <i>
                <FontAwesomeIcon
                  style={{ width: "14px" }}
                  icon={faHeart}
                ></FontAwesomeIcon>
              </i>
            </Link>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => toggleSearch()}
              href=''
              className='main-header__btn search-toggler'
            >
              <i className='paroti-icon-magnifying-glass'></i>
            </div>
            <Link href='donations' className='main-header__btn'>
              <i className='paroti-icon-shopping-cart'></i>
            </Link>
            <Link
              href='#'
              onClick={handleToggle}
              className='main-header__toggler mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
