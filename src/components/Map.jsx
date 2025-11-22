import React from "react";
import styles from "../styles/FooterMap.module.scss";
import Link from "next/link";

const Map = () => {
  return (
    <div className={styles._map}>
      <div className={styles._map_footer} id="map">
        <p>
          <span>Mirasaka</span> <br /> leader en menuiserie aluminium à Agadir,
          vous propose une expertise dans quatre domaines : <br />
          l&apos;aluminium, le vitrage, la décoration intérieure et les produits
          publicitaires.
          <br /> Découvrez nos solutions sur mesure qui transformeront vos
          projets. Visitez notre showroom au DA 16, Cité Dakhla, AGADIR.
        </p>
      </div>
      <div className={styles._map_map}>
        <iframe
          title="mirasaka adresse"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3440.86484513464!2d-9.547578024432145!3d30.41157627474079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI0JzQxLjciTiA5wrAzMic0Mi4wIlc!5e0!3m2!1sen!2sma!4v1726349547586!5m2!1sen!2sma"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link
          href={
            "https://www.google.com/maps?q=30.4115763,-9.5450031&z=17&hl=en"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvrir dans Google Maps
        </Link>
      </div>
    </div>
  );
};

export default Map;
