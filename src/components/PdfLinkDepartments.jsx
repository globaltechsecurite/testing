"use client";

import React from "react";
import styles from "../styles/SolutionsPDF.module.scss";

const PdfLinkDepartments = ({ departement, pdfUrl }) => {
  const pdFichesTechniques = "/assets/fiches-techniques/fiches-techniques.pdf";
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdfContainer_child}>
        <h3>Explorez Nos Solutions Innovantes!</h3>
        <p>
          Découvrez plus d&apos;images et d&apos;informations sur nos
          différentes départements dans notre PDF.
        </p>
        <div className={styles.buttonContainer}>
          <a href={pdFichesTechniques} download className={styles.button}>
            Télécharger Fiches Techniques
          </a>
          <a href={pdfUrl} download className={styles.button}>
            Télécharger le PDF
          </a>
          <a
            href={`/demande-de-devis?dep=${departement}`}
            className={styles.button}
          >
            Demande de devis ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfLinkDepartments;
