import styles from "../styles/YearsOfExperice.module.scss";
const YearsOfExperience = () => {
  return (
    <div className={styles._yearsofexperience}>
      <div className={styles._yearsofexperience_child}>
        <div className={styles._yearsofexperience_child_number}>
          <h4>+30</h4>
        </div>
        <div className={styles._yearsofexperience_child_subnumber}>
          <p>d&apos;héritage, de confiance et de luxe</p>
        </div>
        <div className={styles._yearsofexperience_child_para}>
          <p>
            Avec trois décennies d&apos;expérience, nous redéfinissons
            l&apos;élégance et la qualité dans le secteur de l&apos;aluminium.
          </p>
        </div>
      </div>
      <div className={styles._yearsofexperience_highlights}>
        <div className={styles._yearsofexperience_highlights_each}>
          <h4>Expertise</h4>
          <p>
            Notre équipe d&apos;experts est dédiée à fournir des solutions sur
            mesure, garantissant des résultats exceptionnels à chaque projet.
            Nous mettons en œuvre des techniques avancées et une connaissance
            approfondie du secteur pour répondre à vos exigences spécifiques.
          </p>
        </div>
        <div className={styles._yearsofexperience_highlights_each}>
          <h4>Qualité</h4>
          <p>
            Nous utilisons des matériaux de la plus haute qualité pour assurer
            la durabilité et l&apos;esthétique de chaque produit. Chaque étape
            de notre processus de fabrication est soigneusement contrôlée pour
            garantir un produit final qui dépasse vos attentes.
          </p>
        </div>
        <div className={styles._yearsofexperience_highlights_each}>
          <h4>Innovation</h4>
          <p>
            Nous intégrons les dernières technologies pour offrir des solutions
            modernes et efficaces qui répondent aux besoins de nos clients. En
            restant à l&apos;avant-garde des tendances du marché, nous sommes en
            mesure d&apos;apporter des améliorations continues à nos produits et
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YearsOfExperience;
