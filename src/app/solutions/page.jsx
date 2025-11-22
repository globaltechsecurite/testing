import styles from "../../styles/Solutions.module.scss";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import SolutionsPDF from "../../components/SolutionsPDF";

export const metadata = {
  title: "Nos Solutions - Mirasaka",
  description:
    "Découvrez l'expertise de Mirasaka dans les solutions en aluminium, alliant esthétique et performance. Transformez vos projets avec des innovations sur mesure.",
  keywords:
    "Mirasaka, Aluminium Agadir, Fournitures et installation, solutions aluminium, découpe laser, CNC, impression, panneaux LED, matériaux, design, personnalisable",
  authors: ["Mirasaka"],
  icons: {
    icon: "/logo-two-letters.svg",
  },
  openGraph: {
    title: "Nos Solutions - Mirasaka",
    description:
      "Découvrez l'expertise de Mirasaka dans les solutions en aluminium, alliant esthétique et performance.",
    type: "website",
    url: "https://mirasaka.ma/solutions",
    image: "/logo-two-letters.svg",
  },
};

const Home = () => {
  return (
    <div className={styles._solutions}>
      <Navbar />
      <div className={styles._solutions_hero}>
        <div className={styles._solutions_hero_title}>
          <h1>Nos Solutions</h1>
        </div>
        <div className={styles._solutions_hero_para}>
          <p>
            Découvrez l&apos;expertise de <strong>Mirasaka</strong> dans les
            solutions en aluminium, alliant esthétique et performance.
            <br />
            Transformez vos projets avec des innovations sur mesure qui
            répondent à vos besoins.
          </p>
        </div>
      </div>
      <SolutionsPDF departement={"publicité"} />
      <div className={styles._solutions_content}>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>SERVICE DÉCOUPE LASER + CNC</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>ENCRE GALAXY BASE DE SOLVANT</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>MODULE LED 3 POINT</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>MODULE LED 1 POINT ,2 POINT</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>TRANSFORMATEURS LED</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>X BANNER</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>ROLL UP</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>FOREX</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>PLEXIGLASS</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>ADHÉSIF DÉCOUPE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>ORACAL VINYLE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>VINYLE TRANSLUCIDE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>FLEX IMPRESSION</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>LEXAN</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>STOP TROTTOIR</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>CADRE CLIC CLAC</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>RUBAN LED</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>TROPHÉ</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>CANVAS</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>VINYLE ONE WAY</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>BÂCHE FRONTLIT</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>PLAQUE LED SMD</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>PORTE AFFICHE/MENU</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>PORTE BROCHURE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>COMPACTO</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>MAMOUNI</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>HÉLICE HOLOGRAPHIQUE PROJECTEUR 3D</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>RACLETTE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>SILICONE + COLLE</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>FAUX MARBRE UV PANNEL</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>FILM DÉCORATIFS RÉFLECTIV</h2>
          </div>
        </div>
        <div className={styles._solutions_content_each}>
          <div className={styles._solutions_content_each_title}>
            <h2>TUBE GALVANISÉ</h2>
          </div>
        </div>
      </div>
      <SolutionsPDF />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
