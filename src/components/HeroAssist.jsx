import React from "react";
import styles from "../styles/HeroAssist.module.scss";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";
const HeroAssist = () => {
  return (
    <div className={styles._heroAssist}>
      <div className={styles._heroAssist_title}>
        <h1>Avez-vous besoin d&apos;aide ?</h1>
      </div>
      <div className={styles._heroAssist_bg}>
        <div className={styles._heroAssist_bg_miniPara}>
          <p>Votre satisfaction est notre priorité.</p>
        </div>
      </div>
      <div className={styles._heroAssist_child}>
        <div className={styles._heroAssist_child_each}>
          <div className={styles._heroAssist_child_each_title}>
            <h2>Département aluminium</h2>
          </div>
          <div className={styles._heroAssist_child_each_depInfo}>
            <ul>
              <li>
                <i>
                  <LuUserCircle size={28} color="#000" />
                </i>
                Nom Contact
              </li>
              <li>
                <i>
                  <MdLocalPhone size={28} color="#000" />
                </i>{" "}
                <Link href="tel:+212668449976">+212668449976</Link>
              </li>
              <li>
                <Link href="tel:+212668449976">
                  <span>
                    <MdLocalPhone size={35} color="#fff" />
                  </span>
                  Appeler maintenant
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles._heroAssist_child_each}>
          <div className={styles._heroAssist_child_each_title}>
            <h2>Département vitrage</h2>
          </div>
          <div className={styles._heroAssist_child_each_depInfo}>
            <ul>
              <li>
                <i>
                  <LuUserCircle size={28} color="#000" />
                </i>
                Nom Contact
              </li>
              <li>
                <i>
                  <MdLocalPhone size={28} color="#000" />
                </i>
                <Link href="tel:+212668449976">+212668449976</Link>
              </li>
              <li>
                <Link href="tel:+212668449976">
                  <span>
                    <MdLocalPhone size={35} color="#fff" />
                  </span>
                  Appeler maintenant
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles._heroAssist_child_each}>
          <div className={styles._heroAssist_child_each_title}>
            <h2>Département décoration</h2>
          </div>
          <div className={styles._heroAssist_child_each_depInfo}>
            <ul>
              <li>
                <i>
                  <LuUserCircle size={28} color="#000" />
                </i>
                Nom Contact
              </li>
              <li>
                <i>
                  <MdLocalPhone size={28} color="#000" />
                </i>
                <Link href="tel:+212668449976">+212668449976</Link>
              </li>
              <li>
                <Link href="tel:+212668449976">
                  <span>
                    <MdLocalPhone size={35} color="#fff" />
                  </span>
                  Appeler maintenant
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles._heroAssist_child_each}>
          <div className={styles._heroAssist_child_each_title}>
            <h2>Département publicité</h2>
          </div>
          <div className={styles._heroAssist_child_each_depInfo}>
            <ul>
              <li>
                <i>
                  <LuUserCircle size={28} color="#000" />
                </i>
                Nom Contact
              </li>
              <li>
                <i>
                  <MdLocalPhone size={28} color="#000" />
                </i>{" "}
                <Link href="tel:+212668449976">+212668449976</Link>
              </li>
              <li>
                <Link href="tel:+212668449976">
                  <span>
                    <MdLocalPhone size={35} color="#fff" />
                  </span>
                  Appeler maintenant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAssist;
