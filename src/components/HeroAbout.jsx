import React from "react";
import styles from "../styles/HeroAbout.module.scss";
const HeroAbout = () => {
  return (
    <div className={styles._heroAbout}>
      <div className={styles._heroAbout_title}>
        <h1>Qui somme-nous ?</h1>
      </div>
      <div className={styles._heroAbout_bg}>
        <div className={styles._heroAbout_bg_miniPara}>
          <p>matieres innovates & solutions design</p>
        </div>
      </div>
      <div className={styles._heroAbout_para}>
        <div className={styles._heroAbout_para_handler}>
          <div>
            <h2>
              <span>Mirasaka.</span>
              <br />
              Leader du Secteur depuis Trois Décennies
            </h2>
          </div>
          <div>
            <p>
              Chez Mirasaka, nous sommes fiers d&apos;être un leader dans le
              domaine de la menuiserie en aluminium avec plus de 30 ans
              d&apos;expérience. Notre passion pour l&apos;innovation et le
              design nous pousse à offrir des solutions sur mesure qui allient
              esthétique et fonctionnalité. Situés à Agadir, nous nous engageons
              à transformer vos idées en réalisations concrètes, tout en
              garantissant la plus haute qualité.
            </p>
          </div>

          <div>
            <p>
              Nous proposons une large gamme de produits, notamment des{" "}
              <span className="solution">ouvertures</span>, des{" "}
              <span className="solution">ouvrages de protection</span>, et des{" "}
              <span className="solution">traitements de façade</span>, tous
              conçus pour répondre aux exigences de nos clients. En plus, notre
              expertise en{" "}
              <span className="service">transformation et installation</span>{" "}
              nous permet de réaliser des projets complexes avec un suivi
              rigoureux.
            </p>
          </div>

          <div>
            <p>
              Notre équipe est dédiée à offrir un{" "}
              <span className="service">service après-vente</span> exceptionnel,
              assurant votre satisfaction à chaque étape du processus. Chez
              Mirasaka, nous croyons que chaque projet est une opportunité de
              créer des espaces uniques et durables, utilisant des matériaux
              respectueux de l&apos;environnement et des techniques de pointe
              pour garantir des performances thermiques et acoustiques
              optimales. Faites confiance à notre savoir-faire pour donner vie à
              vos idées et embellir vos espaces de vie.
            </p>
          </div>
        </div>
      </div>
      <div className={styles._heroAbout_mission}>
        <div className={styles._heroAbout_mission_each}>
          <div className={styles._heroAbout_mission_each_title}>
            <h2>Notre Mission</h2>
          </div>
          <div className={styles._heroAbout_mission_each_para}>
            <p>
              Notre mission est de fournir des produits d&apos;aluminium qui
              répondent aux besoins diversifiés de nos clients, tout en
              respectant les normes environnementales. Nous croyons en
              l&apos;importance de la durabilité et de la performance, ce qui
              nous permet de nous démarquer dans notre secteur.
            </p>
          </div>
        </div>
        <div className={styles._heroAbout_mission_each}>
          <div className={styles._heroAbout_mission_each_title}>
            <h2>Nos Valeurs</h2>
          </div>
          <div className={styles._heroAbout_mission_each_para}>
            <p>
              Nous valorisons l&apos;intégrité, le professionnalisme et la
              proximité avec nos clients. Chaque projet est unique, et nous nous
              engageons à offrir un service personnalisé pour garantir votre
              satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className={styles._heroAbout_cards}>
        <div className={styles._heroAbout_cards_each}>
          <h3>+30</h3>
          <h4>
            <span>Experience</span>
          </h4>
        </div>
        <div className={styles._heroAbout_cards_each}>
          <h3>4.5/5</h3>
          <h4>
            <span>Testimonials</span>
          </h4>
        </div>
        <div className={styles._heroAbout_cards_each}>
          <h3>+3000</h3>
          <h4>
            <span>Clients</span>
          </h4>
        </div>
        <div className={styles._heroAbout_cards_each}>
          <h3>+3450</h3>
          <h4>
            <span>Projects</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
