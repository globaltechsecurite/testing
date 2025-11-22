"use client";
import React, { useState } from "react";
import styles from "../styles/About.module.scss";
import gsap from "gsap";
import solutions from "../data/solutions";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles._aboutcompo}>
      <div className={styles._aboutcompo_content}>
        <h2>Notre Vision chez Mirasaka.</h2>
        <p
          onClick={toggleParagraph}
          className={`${styles.paragraph} ${
            isExpanded ? styles.expanded : styles.collapsed
          }`}
        >
          {isExpanded
            ? `Situé à Agadir, MIRASAKA est le spécialiste pour tous vos travaux de vitrerie-miroiterie, 
            Habillage de facades de Menuiserie Alluminium, Garde Corps ainsi que la vente de tous les équipements de
             communication depuis plus de 25 ans au Maroc. Impliqué envers ses clients, votre spécialiste avec les panneaux 
             composites en aluminium Bestbond et les tôles d'aluminium prélaquées Bestbond, nous vous offrons une palette étendue
              de produits destinés à l'architecture et au bâtiment.
             Et nous le faisons avec la sécurité qu'apporte une entreprise mondiale. ${
               isExpanded ? "Lire moins" : null
             }`
            : `Situé à Agadir, MIRASAKA est le spécialiste pour tous vos travaux de vitrerie-miroiterie, Habillage de
             facades de Menuiserie Alluminium, Garde Corps ainsi que la vente de tous les équipements de communication depuis plus de 25 ans au Maroc.
              Impliqué...${!isExpanded ? "Lire plus" : null}`}
        </p>
      </div>
      <div className={styles._aboutcompo_child}>
        {solutions.map((slt, i) => {
          return (
            <div
              className={styles._aboutcompo_child_each}
              key={i}
              style={{
                backgroundImage: `url(${slt.imagePath})`,
              }}
            >
              <Link
                className={styles._aboutcompo_child_each_link}
                href={slt.link}
              >
                <svg width="30" height="30" viewBox="0 0 20 20">
                  <path
                    d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z"
                    fill="#000"
                    stroke="#000"
                    strokeWidth="1"
                  ></path>
                </svg>
              </Link>
              <div className={styles._aboutcompo_child_each_title}>
                <p>
                  <a href={slt.title}>{slt.title}</a>
                </p>
              </div>
            </div>
          );
        })}
        <div className={styles._aboutcompo_child_each}>
          <Link className={styles._aboutcompo_child_each_link} href={"#"}>
            <svg width="30" height="30" viewBox="0 0 20 20">
              <path
                d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z"
                fill="#000"
                stroke="#000"
                strokeWidth="1"
              ></path>
            </svg>
          </Link>
          <div className={styles._aboutcompo_child_each_para}>
            <p>
              Chez Mirasaka, nous sommes spécialisés en vitrerie et menuiserie
              en aluminium depuis plus de 25 ans. Notre expertise garantit des
              solutions durables et esthétiques, parfaites pour transformer vos
              projets en réalisations exceptionnelles. Faites confiance à
              Mirasaka pour allier style et sécurité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
