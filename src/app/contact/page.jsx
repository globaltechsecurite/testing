import React from "react";
import Navbar from "../../components/Navbar";
import HeroContact from "../../components/HeroContact";
import Map from "../../components/Map";
import Contact from "../../components/Contact";

export const metadata = {
  title: "Contact - Mirasaka",
  description:
    "Contactez Mirasaka pour obtenir de l'aide dans les domaines de l'aluminium, du vitrage, de la décoration intérieure et des produits publicitaires. Nous sommes là pour vous aider.",
  keywords:
    "Mirasaka, contact, aluminium, vitrage, Aluminium Agadir, décoration intérieure, produits publicitaires, service client, assistance, Agadir",
  authors: ["Équipe Mirasaka"],
  openGraph: {
    title: "Contactez Mirasaka - Assistance et Support",
    description:
      "Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos services en aluminium, vitrage, décoration et publicité.",
    type: "website",
    url: "https://mirasaka.ma/contact",
    image: "/assets/contact-image.jpg",
  },
  icons: {
    icon: "/logo-two-letters.svg",
  },
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
