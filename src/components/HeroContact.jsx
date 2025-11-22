"use client";
import React from "react";
import styles from "../styles/HeroContact.module.scss";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineSettingsPhone } from "react-icons/md";
const HeroContact = () => {
  return (
    <div className={styles._heroContact}>
      <div className={styles._heroContact_bgImage}></div>
      <div className={styles._heroContact_contactForm}>
        <div className={styles._heroContact_contactForm_child}>
          <div>
            <h1>Restons en contact.</h1>
          </div>
          <div>
            <p>
              Ou contactez-nous{" "}
              <Link href="mailto:commercial@mirasaka.ma">commercial@mirasaka.ma</Link>
            </p>
          </div>
          <form className={styles._heroContact_contactForm_child_form}>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Entrez votre prénom..."
                required
              />
              <span>
                <AiOutlineUser size={22} />
              </span>
            </div>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Entrez votre nom de famille..."
                required
              />
              <span>
                <AiOutlineUser size={22} />
              </span>
            </div>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <label htmlFor="email">Adresse email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre adresse email..."
                required
              />
              <span>
                <IoMailUnreadOutline size={22} />
              </span>
            </div>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <label htmlFor="phone">Numéro de téléphone</label>
              <input type="tel" name="phone" id="phone" placeholder="06..." />
              <span>
                <MdOutlineSettingsPhone size={22} />
              </span>
            </div>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Entrez votre texte principal ici..."
                rows={10}
              ></textarea>
            </div>
            <div
              className={
                styles._heroContact_contactForm_child_form_inputHandler
              }
            >
              <input type="submit" value="Soumettre le formulaire" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
