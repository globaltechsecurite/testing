import React from "react";
import Navbar from "../../components/Navbar";
import HeroAssist from "../../components/HeroAssist";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
export const metadata = {
  title: "Assistance  - Mirasaka",
  description:
    "Découvrez comment l'assistant Mirasaka peut vous aider dans les domaines de l'aluminium, du vitrage, de la décoration intérieure et des produits publicitaires. Votre satisfaction est notre priorité.",
  keywords:
    "Mirasaka, assistant, aluminium, vitrage, décoration intérieure, produits publicitaires, service client, aide, support, Agadir, solutions sur mesure",
  authors: ["Équipe Mirasaka"],
  openGraph: {
    title: "Assistant Mirasaka - Aide et Support",
    description:
      "L'assistant Mirasaka est là pour vous aider dans toutes vos questions concernant nos services en aluminium, vitrage, décoration et publicité.",
    type: "website",
    url: "https://mirasaka.ma/assistant",
    image: "/assets/assistant-image.jpg",
  },
  icons: {
    icon: "/logo-two-letters.svg",
  },
};
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroAssist />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
