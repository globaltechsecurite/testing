import React from "react";
import Navbar from "../../components/Navbar";
import Map from "../../components/Map";
import Contact from "../../components/Contact";
import HeroDevis from "../../components/HeroDevis";

export const metadata = {
  title: "Demande de devis - Mirasaka",
  description:
    "Mirasaka se spécialise dans des solutions de menuiserie aluminium innovantes avec plus de 30 ans d'expérience. Demandez votre devis personnalisé dès aujourd'hui.",
  keywords:
    "Mirasaka, Aluminium Agadir, menuiserie aluminium, demande de devis, solutions innovantes, design sur mesure, Agadir, matériaux durables, devis sur mesure, efficacité énergétique, projets de construction, satisfaction client, service professionnel",
  authors: [{ name: "Équipe Mirasaka" }],
  openGraph: {
    title: "Demande de devis - Mirasaka",
    description:
      "Mirasaka se spécialise dans des solutions de menuiserie aluminium innovantes avec plus de 30 ans d'expérience. Demandez votre devis personnalisé dès aujourd'hui.",
    url: "https://mirasaka.ma/demande-de-devis",
    siteName: "Mirasaka",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Demande de devis Mirasaka",
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
      <HeroDevis />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
