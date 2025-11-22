import styles from "../../styles/Aluminum.module.scss";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import AliminumSlider from "../../components/AliminumSlider";
import PdfLinkDepartments from "../../components/PdfLinkDepartments";
import FicheTechnique from "../../components/FichesTechnique";

export const metadata = {
  title: "Espace Aluminium - Mirasaka",
  description:
    "Découvrez l'expertise de Mirasaka dans les solutions en aluminium, alliant esthétique et performance. Transformez vos projets avec des innovations sur mesure.",
  keywords:
    "Mirasaka, Aluminium Agadir, fournitures et installation, solutions aluminium, découpe laser, CNC, impression, panneaux LED, matériaux, design, personnalisable, menuiserie aluminium, produits en aluminium, solutions sur mesure, Agadir, travaux en aluminium, construction aluminium, design intérieur aluminium",
  authors: ["Mirasaka"],
  icons: {
    icon: "/logo-two-letters.svg",
  },
  openGraph: {
    title: "Nos Solutions - Mirasaka",
    description:
      "Découvrez l'expertise de Mirasaka dans les solutions en aluminium, alliant esthétique et performance.",
    type: "website",
    url: "https://mirasaka.ma/departement-aluminium",
    image: "/logo-two-letters.svg",
  },
};

const Home = () => {
  return (
    <div className={styles._depaluminum}>
      <Navbar />
      <div className={styles._depaluminum_hero}>
        <div className={styles._depaluminum_hero_title}>
          <h1>Espace Aluminium</h1>
        </div>
        <div className={styles._depaluminum_hero_para}>
          <p></p>
        </div>
      </div>
      <div className={styles._depaluminum_content}>
        <div className={styles._depaluminum_content_each}></div>
      </div>
      <AliminumSlider />
      <FicheTechnique />
      <PdfLinkDepartments
        departement={"aluminium"}
        pdfUrl={"/assets/espace-aluminium-mirasaka.pdf"}
      />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
