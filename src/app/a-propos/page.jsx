import React from "react";
import Navbar from "../../components/Navbar";
import HeroAbout from "../../components/HeroAbout";
import Map from "../../components/Map";
import Contact from "../../components/Contact";

export const metadata = {
  title: "À Propos de Nous - Mirasaka",
  description:
    "Mirasaka se spécialise dans des solutions de menuiserie aluminium innovantes avec plus de 30 ans d'expérience. Découvrez nos designs sur mesure et notre service exceptionnel.",
  keywords:
    "Mirasaka, menuiserie aluminium, solutions innovantes, design sur mesure, Agadir, matériaux durables, solutions architecturales, amélioration de l'habitat, efficacité énergétique, menuiserie, traitements de façade, satisfaction client, service professionnel, projets de construction",
  authors: [{ name: "Équipe Mirasaka" }],
  openGraph: {
    title: "À Propos de Nous - Mirasaka",
    description:
      "Mirasaka se spécialise dans des solutions de menuiserie aluminium innovantes avec plus de 30 ans d'expérience. Découvrez nos designs sur mesure et notre service exceptionnel.",
    url: "https://mirasaka.ma/a-propos",
    siteName: "Mirasaka",
    type: "website",
    images: [
      {
        url: "/assets",
        width: 800,
        height: 600,
        alt: "Menuiserie Aluminium Mirasaka",
      },
    ],
  },
  icons: {
    icon: "/logo-two-letters.svg",
  },
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
