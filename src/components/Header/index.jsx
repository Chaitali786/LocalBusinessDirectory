import styles from "./header.module.css";
import Nav from "../../components/Nav";

const Header = ({ title, subtitle, setPage }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.content}>
          <h1 className={styles.logotext}>{title}</h1>
          <p className={styles.tagline}>{subtitle}</p>
        </div>
        <Nav setPage={setPage} />
      </header>
    </>
  );
};

export default Header;
