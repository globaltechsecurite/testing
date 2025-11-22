import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Projects";
import YearsOfExperience from "../components/YearsOfExperience";
import Testimonials from "../components/Testimonials";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import OurReferencies from "../components/OurReferencies";
export const metadata = {
  title: "Mirasaka - Aluminium et vitrage",
  description:
    "Découvrez l'expertise de Mirasaka dans les solutions de vitrage, menuiserie aluminium, décoration intérieure et produits publicitaires. Transformez vos projets avec nos innovations sur mesure.",
  keywords:
    "Mirasaka, menuiserie aluminium, Aluminium Agadir, Aluminium Maroc, solutions de vitrage, décoration intérieure, produits publicitaires, vitrage innovant, garde corps en vitrage, vitrage acoustique, vitrage thermique, design intérieur, installations sur mesure, Agadir, matériaux durables, solutions sur mesure",
  authors: ["Mirasaka"],
  icons: {
    icon: "/logo-two-letters.svg",
  },
  openGraph: {
    title: "Mirasaka - Leader en Menuiserie Aluminium",
    description:
      "Découvrez l'expertise de Mirasaka dans les solutions de vitrage, menuiserie aluminium, décoration intérieure et produits publicitaires.",
    type: "website",
    url: "https://mirasaka.ma",
    image: "/assets/logo-two-letters.svg", // Update this to the relevant image URL
  },
};
function Home() {
  return (
    <div className="main_container">
      <Navbar />
      <Hero />
      <Departments />
      <Project />
      <YearsOfExperience />
      <Testimonials />
      <OurReferencies />
      <Map />
      <Contact />
    </div>
  );
}

export default Home;
