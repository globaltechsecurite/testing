"use client";

import React from "react";
import styles from "../styles/SolutionsPDF.module.scss";

const SolutionsPDF = ({ departement }) => {
  const pdfUrl = "/mirasaka-solutions.pdf";
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdfContainer_child}>
        <h2>Consultez toutes nos solutions</h2>
        <p>
          Si vous ne souhaitez pas faire défiler la page pour voir toutes les
          solutions, vous pouvez les consulter dans notre PDF.
        </p>
        <div className={styles.buttonContainer}>
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

export default SolutionsPDF;
