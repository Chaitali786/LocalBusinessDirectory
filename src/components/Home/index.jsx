import styles from "./home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.ctaImage}></div>
        <div className={styles.ctaText}>
          <h2>The Online Local Business Directory</h2>
          <p>
            Access verified business listings in city. Your trusted source for
            location intelligence.Empowering business professionals and
            researchers with accurate, up-to-date information.
          </p>
          <p>
            Our mission is to make business and location data accessible,
            accurate, and actionable.
          </p>
          <p>Select you nearby area from MENU</p>
        </div>
      </div>
    </>
  );
};
export default Home;
