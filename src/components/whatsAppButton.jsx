// components/WhatsAppButton.js
import React from "react";
import styles from "../styles/WhatsAppButton.module.scss"; // Ensure this file exists for styling
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      className={styles.whatsappButton}
      href="https://wa.me/+212669254366"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/whatsapp.svg"
        priority={false}
        width={50}
        height={50}
        alt="WhatsApp mirasaka"
        title="whatsApp mirasaka"
      />
    </a>
  );
};

export default WhatsAppButton;
