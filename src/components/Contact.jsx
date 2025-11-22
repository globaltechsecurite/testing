"use client";
import React from "react";
import styles from "../styles/Contact.module.scss";
import Link from "next/link";
import RotatedTextSvg from "./RotatedTextSvg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
const Contact = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const handleScrollToTop = () => {
    gsap.to(window, { duration: 3, scrollTo: 0 });
  };

  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles._contactcompo}>
      <div className={styles._contactcompo_child}>
        <div className={styles._contactcompo_child_each}>
          <h5>Nous redéfinissons l&apos;excellence en aluminium.</h5>
        </div>
        <div className={styles._contactcompo_child_each}>
          <div>
            <h5>MAROC.</h5>
          </div>
          <div>
            <p>DA 16. Lot dakhla. AGADIR</p>
          </div>
        </div>
        <div className={styles._contactcompo_child_each}>
          <div>
            <h5>Entreprise.</h5>
          </div>
          <div>
            <p>
              <Link
                href={"mailto:commercial@mirasaka.ma"}
                aria-label="Contactez-nous par email"
              >
                commercial@mirasaka.ma
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                href={"tel:+212668449976"}
                aria-label="Appeler le numéro +212668449976"
              >
                +212 6 68 44 99 76
              </Link>
            </p>
          </div>
        </div>
        <div className={styles._contactcompo_child_each}>
          <div>
            <h5>Réseaux Sociaux</h5>
          </div>
          <div className={styles._contactcompo_child_each_socialMedia}>
            <span>
              <Link
                href="https://www.facebook.com/mirasaka.officiel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} color="#fff" />
              </Link>
            </span>
            <span>
              <Link
                href="https://www.instagram.com/mirasaka.officiel/profilecard/?igsh=MXB4ZXRqdW0wY253bQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} color="#fff" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles._contactcompo_svg}>
        <RotatedTextSvg />
      </div>
      <footer>
        <div>
          <p>© {year} Mirasaka. Tous droits réservés.</p>
        </div>
      </footer>
      <div className={styles._contactcompo_toTop} onClick={handleScrollToTop}>
        <span>
          <svg
            width="43"
            height="89"
            viewBox="0 0 73 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.948403 40.5178L1.26913 42.4766L1.4808 43.4041L1.69246 44.3317C20.9702 40.7136 30.096 30.3425 34.4789 20.7206L34.918 98.0098L35.8467 98.0045L37.8075 97.9934L38.7362 97.9881L38.2948 20.2861C42.6859 30.2709 52.0351 41.0531 71.3504 44.0392L71.6488 42.0768L71.8493 41.0438L71.9473 40.1145C42.3036 35.6391 38.5564 11.8228 38.2016 3.87896C38.2949 2.12414 38.1858 1.09283 38.1852 0.98964L37.2571 1.09812L36.7411 1.10105L34.2638 1.01192C34.2638 1.01192 34.2673 1.63105 34.2726 2.55976L34.2872 5.13951C33.8217 14.0168 29.7108 35.1947 0.948403 40.5178Z"
              fill="black"
              stroke="black"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Contact;
