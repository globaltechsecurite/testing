import styles from "../../styles/Aluminum.module.scss";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import DecoratifSlider from "../../components/DecoratifSlider";
import PdfLinkDepartments from "../../components/PdfLinkDepartments";
import FicheTechnique from "../../components/FichesTechnique";

export const metadata = {
  title: "Espace decoration - Mirasaka",
  description:
    "Découvrez l'expertise de Mirasaka dans les solutions de vitrage innovantes, alliant transparence, sécurité et performance. Transformez vos espaces avec nos produits sur mesure.",
  keywords:
    "Mirasaka, Aluminium Agadir, vitrage, solutions de vitrage, vitrage innovant, garde corps en vitrage, vitrage acoustique, vitrage thermique, Agadir, menuiserie en aluminium, design intérieur, produits en verre, installations sur mesure",
  authors: ["Mirasaka"],
  icons: {
    icon: "/logo-two-letters.svg",
  },
  openGraph: {
    title: "Espace Vitrage - Mirasaka",
    description:
      "Découvrez l'expertise de Mirasaka dans les solutions de vitrage innovantes, alliant transparence, sécurité et performance.",
    type: "website",
    url: "https://mirasaka.ma/departement-vitrage",
    image: "/assets/vitrage-image.jpg", // Update this to the relevant image URL for vitrage
  },
};

const Home = () => {
  return (
    <div className={styles._depaluminum}>
      <Navbar />
      <div className={styles._depaluminum_hero}>
        <div className={styles._depaluminum_hero_title}>
          <h1>Espace Décoration</h1>
        </div>
        <div className={styles._depaluminum_hero_para}>
          <p></p>
        </div>
      </div>
      <div className={styles._depaluminum_content}>
        <div className={styles._depaluminum_content_each}></div>
      </div>
      <DecoratifSlider />
      <FicheTechnique />
      <PdfLinkDepartments
        departement={"décoration"}
        pdfUrl={"/assets/espace-décoration-mirasaka.pdf"}
      />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
