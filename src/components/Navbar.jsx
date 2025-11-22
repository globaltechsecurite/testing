"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import MainLogo from "./MainLogo";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import gsap from "gsap";
import {
  MdArrowOutward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navMobile = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const tl = gsap.timeline({ paused: true });

  const displayMobileNavigation = () => {
    setIsMobileNav(true);
    tl.to(navMobile.current, {
      left: "0%",
      duration: 1.5,
      ease: "power4.out",
    });
    tl.play();
  };

  const hideMobileNavigation = () => {
    setIsMobileNav(false);
    tl.to(navMobile.current, {
      left: "-100%",
      duration: 1.5,
      ease: "power4.out",
    });
    tl.play();
  };

  const handleDropDownProducts = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles._navbar}>
      <div className={styles._navbar_child}>
        <div className={styles._navbar_child_logo}>
          <Link href="/" aria-label="accueil">
            <span>
              <MainLogo />
            </span>
          </Link>
        </div>
        <div className={styles._navbar_child_links}>
          <ul>
            <li>
              <Link href="#" aria-label="produits">
                Produits
              </Link>
              <ul>
                <li>
                  <Link href="/espace-aluminium" aria-label="espace-aluminium">
                    Espace Aluminium
                  </Link>
                </li>
                <li>
                  <Link href="/espace-vitrage" aria-label="espace-vitrage">
                    Espace Vitrage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/espace-decoration"
                    aria-label="espace-decoration"
                  >
                    Espace Décoration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" aria-label="solutions">
                    Espace Publicité
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/demande-de-devis" aria-label="devis">
                Devis
              </Link>
            </li>
            <li>
              <Link href="/gallerie" aria-label="gallerie">
                Gallerie
              </Link>
            </li>
            <li>
              <Link href="/a-propos" aria-label="a-propos">
                A propos
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles._navbar_child_contactBtn}>
          {isMobile ? (
            <span>
              {isMobileNav ? (
                <IoMdClose
                  onClick={hideMobileNavigation}
                  size={60}
                  color="#fff"
                />
              ) : (
                <IoIosMenu
                  onClick={displayMobileNavigation}
                  size={60}
                  color="#fff"
                />
              )}
            </span>
          ) : (
            <>
              <Link href="/assistance" aria-label="assistance">
                <span>
                  <FaHeadphonesSimple size={28} color="#fff" />
                </span>
              </Link>
              <Link href="/contact" aria-label="contact">
                Contact
                <span>
                  <MdArrowOutward size={35} color="#fff" />
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className={styles._navbar_mobile} ref={navMobile}>
        <div className={styles._navbar_mobile_child}>
          <div className={styles._navbar_mobile_child_links}>
            <ul>
              <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropDownProducts();
                  }}
                >
                  Produits
                  <span>
                    {isOpen ? (
                      <MdKeyboardArrowUp size={50} color="#000" />
                    ) : (
                      <MdKeyboardArrowDown size={50} color="#000" />
                    )}
                  </span>
                </Link>
                {isOpen ? (
                  <ul>
                    <li>
                      <Link
                        href="/espace-aluminium"
                        aria-label="espace-aluminium"
                      >
                        Espace Aluminium
                      </Link>
                    </li>
                    <li>
                      <Link href="/espace-vitrage" aria-label="espace-vitrage">
                        Espace Vitrage
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/espace-decoration"
                        aria-label="espace-decoration"
                      >
                        Espace Décoration
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions" aria-label="solutions">
                        Espace Publicité
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li>
                <Link href="/demande-de-devis" aria-label="devis">
                  Devis
                  <span>
                    <MdArrowOutward size={40} color="#000" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallerie" aria-label="gallerie">
                  Gallerie
                  <span>
                    <MdArrowOutward size={40} color="#000" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/a-propos" aria-label="a-propos">
                  A propos
                  <span>
                    <MdArrowOutward size={40} color="#000" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" aria-label="contact">
                  Contact
                  <span>
                    <MdArrowOutward size={40} color="#000" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/assistance" aria-label="assistance">
                  Assistance
                  <span>
                    <MdArrowOutward size={40} color="#000" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
