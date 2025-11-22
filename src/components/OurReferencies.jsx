import React from "react";
import styles from "../styles/NosReferencies.module.scss";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const OurReferencies = () => {
  return (
    <div className={styles._referencies}>
      <div className={styles._referencies_title}>
        <h5>Nos Réference</h5>
      </div>
      <div className={styles._referencies_subtitle}>
        <p>
          Découvrez ci-dessous les logos de nos précieux partenaires qui nous
          ont fait confiance pour réaliser leurs projets.
        </p>
      </div>
      <Marquee
        speed={80}
        direction="right"
        className={styles._referencies_marquee}
      >
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/akdital.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/dania.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/rui.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/moove.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/renault.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/sbgs.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/parkids.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>

        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/mcook.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/misterfish.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/pp.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/nil.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/mabroul.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/marhaba.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
        <div className={styles._referencies_marquee_each}>
          <Image
            src="/assets/companies/vogue.svg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            title=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default OurReferencies;

/*  
import React from "react";
import styles from "../styles/NosReferencies.module.scss";
import Marquee from "react-fast-marquee";
const OurReferencies = () => {
  return (
    <div className={styles._referencies}>
      <div className={styles._referencies_title}>
        <h5>Nos Réference</h5>
      </div>
      <div className={styles._referencies_subtitle}>
        <p>
          Découvrez ci-dessous les logos de nos précieux partenaires qui nous
          ont fait confiance pour réaliser leurs projets.
        </p>
      </div>
      <Marquee
        speed={20}
        direction="right"
        className={styles._referencies_marquee}
      >
        <div className={styles._referencies_marquee_each}>
          <p>HOPITAL INTERNATIONAL AGADIR</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>DANYA LAND</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>RIU</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>MOOV UP</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>RENAULT SODISMA</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>SBGS</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>PARKIDS</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>BLASSTNA</p>
        </div>
      </Marquee>
      <Marquee
        speed={20}
        direction="left"
        className={styles._referencies_marquee}
      >
        <div className={styles._referencies_marquee_each}>
          <p>Decameron Tafoukt Beach Hotel</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>MISTER COOK</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>MISTER FISH</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>PETIT PECHEUR</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>NIL BLEU</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>HOTEL MABROUK</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>MARHABA</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>vogue</p>
        </div>
        <div className={styles._referencies_marquee_each}>
          <p>AKDITAL</p>
        </div>
      </Marquee>
    </div>
  );
};

export default OurReferencies;




*/
