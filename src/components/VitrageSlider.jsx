import styles from "../styles/VitrageSlider.module.scss";
const VitrageSlider = () => {
  return (
    <div className={styles._vitrage}>
      <div className={styles._vitrage_header}>
        <div className={styles._vitrage_header_title}>
          <h2>Vitrage Innovant pour Éclairer Votre Espace</h2>
        </div>
        <div className={styles._vitrage_header_subtitle}>
          <p>
            Chez <strong>Mirasaka</strong>, nous redéfinissons le vitrage en
            alliant transparence et sécurité. Nos solutions sur mesure offrent
            une luminosité exceptionnelle tout en garantissant une isolation
            thermique et acoustique optimale. Transformez vos espaces avec des
            vitrages esthétiques et performants qui mettent en valeur chaque
            détail de votre projet.
          </p>
        </div>
      </div>
      <div className={styles._vitrage_child}>
        <div className={styles._vitrage_child_self}>
          <div className={styles._vitrage_child_self_title}>
            <h2>garde corps en vitrage</h2>
          </div>
          <div className={styles._vitrage_child_self_child}>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
          </div>
        </div>
      </div>
      <div className={styles._vitrage_child}>
        <div className={styles._vitrage_child_self}>
          <div className={styles._vitrage_child_self_title}>
            <h2>garde corps en acier galvanisé</h2>
          </div>
          <div className={styles._vitrage_child_self_child}>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
          </div>
        </div>
      </div>
      <div className={styles._vitrage_child}>
        <div className={styles._vitrage_child_self}>
          <div className={styles._vitrage_child_self_title}>
            <h2>5 rails slim vitrées coulissantes</h2>
          </div>
          <div className={styles._vitrage_child_self_child}>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
          </div>
        </div>
      </div>
      <div className={styles._vitrage_child}>
        <div className={styles._vitrage_child_self}>
          <div className={styles._vitrage_child_self_title}>
            <h2>accordéon / cortina</h2>
          </div>
          <div className={styles._vitrage_child_self_child}>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
          </div>
        </div>
      </div>
      <div className={styles._vitrage_child}>
        <div className={styles._vitrage_child_self}>
          <div className={styles._vitrage_child_self_title}>
            <h2>vitrage intelligent et connecté</h2>
          </div>
          <div className={styles._vitrage_child_self_child}>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
            <div className={styles._vitrage_child_self_child_each}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitrageSlider;
