import styles from "../styles/Wistia.module.scss";
const WistiaVideo = () => {
  return (
    <div className={styles.wistia_responsive_padding}>
      <div className={styles.wistia_responsive_wrapper}>
        <iframe
          src="https://fast.wistia.net/embed/iframe/yvt9cehrhv?seo=true&videoFoam=true"
          title="mirasaka Video"
          allow="autoplay; fullscreen"
          allowtransparency="true"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
        ></iframe>
      </div>
    </div>
  );
};

export default WistiaVideo;
