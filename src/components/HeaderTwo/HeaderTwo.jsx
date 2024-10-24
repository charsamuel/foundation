"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "../Header/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Topbar from "../Topbar/Topbar";
import { usePathname } from "next/navigation";
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/uaeScroll";

const HeaderTwo = () => {
  const { handleToggle, toggleSearch } = useRootContext();
  const scrollTop = useScroll(130);

  const { logo_light, navItems } = headerData;
  const pathname = usePathname();

  return (
    <header
      className={`main-header main-header--three ${pathname === "/home2" ? "main-header--two" : ""
        }`}
    >
      <Topbar />
      <nav
        className={
          scrollTop
            ? "sticky-header  main-menu main-menu--three sticky-header--cloned sticky-fixed slideInDown animated "
            : "sticky-header  main-menu main-menu--three slideIn animated"
        }
      >
        <div className='container-fluid'>
          <Link href='/' className='main-header__logo'>
            <Image src={logo_light} width={127} height={49} alt='logo' />
          </Link>
          <ul className='main-menu__list'>
            {navItems.map((navItem) => (
              <NavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          <div className='main-menu__right'>
            <div
              onClick={toggleSearch}
              style={{ cursor: "pointer" }}
              className='main-header__btn search-toggler'
            >
              <i className='paroti-icon-magnifying-glass'></i>
            </div>
            <Link href='donations' className='main-header__btn'>
              <i className='paroti-icon-shopping-cart'></i>
            </Link>
            <Link
              onClick={handleToggle}
              href=''
              className='main-header__toggler mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link href='donations-details' className='thm-btn thm-btn--two '>
              <span>Donate Now</span>
              <i>
                <FontAwesomeIcon
                  style={{ width: "14px" }}
                  icon={faHeart}
                ></FontAwesomeIcon>
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
