"use client";
import React, { useState } from "react";
import styles from "../styles/HeroDevis.module.scss";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineSettingsPhone } from "react-icons/md";
const HeroDevis = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [typeClient, setTypeClient] = useState("particulier");
  const [departement, setDepartement] = useState("aluminium");

  const handleChange = (e, input) => {
    input(e.target.value);
  };
  return (
    <div className={styles._heroDevis}>
      <div className={styles._heroDevis_bgImage}></div>
      <div className={styles._heroDevis_contactForm}>
        <div className={styles._heroDevis_contactForm_child}>
          <div>
            <h1>Demande de devis.</h1>
          </div>
          <div>
            <p>
              Ou contactez-nous{" "}
              <Link href="mailto:commercial@mirasaka.ma">commercial@mirasaka.ma</Link>
            </p>
          </div>
          <form className={styles._heroDevis_contactForm_child_form}>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="firstName">Prénom *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Entrez votre prénom..."
                value={firstName}
                onChange={(e) => {
                  handleChange(e, setFirstName);
                }}
                required
              />
              <span>
                <AiOutlineUser size={22} />
              </span>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="lastName">Nom *</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Entrez votre nom de famille..."
                value={lastName}
                onChange={(e) => {
                  handleChange(e, setLastName);
                }}
                required
              />
              <span>
                <AiOutlineUser size={22} />
              </span>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="email">Adresse email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre adresse email..."
                value={mail}
                onChange={(e) => {
                  handleChange(e, setMail);
                }}
                required
              />
              <span>
                <IoMailUnreadOutline size={22} />
              </span>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="phone">Numéro de téléphone *</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="06..."
                value={phone}
                onChange={(e) => {
                  handleChange(e, setPhone);
                }}
                required
              />
              <span>
                <MdOutlineSettingsPhone size={22} />
              </span>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="type-client">Type Client *</label>
              <select
                name="type-client"
                id="type-client"
                value={typeClient}
                onChange={(e) => {
                  handleChange(e, setTypeClient);
                }}
              >
                <option value=""></option>
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel</option>
              </select>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="espace">Espace *</label>
              <select
                name="espace"
                id="espace"
                value={departement}
                onChange={(e) => {
                  handleChange(e, setDepartement);
                }}
              >
                <option value="aluminium">Aluminium</option>
                <option value="vitrage">Vitrage</option>
                <option value="décoration">Décoration</option>
                <option value="publicité">Publicité</option>
              </select>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Entrez votre message..."
                rows={10}
              ></textarea>
            </div>
            <div
              className={styles._heroDevis_contactForm_child_form_inputHandler}
            >
              <input type="submit" value="Enovyer ma demande" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroDevis;
