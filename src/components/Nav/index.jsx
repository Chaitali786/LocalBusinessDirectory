import styles from "./nav.module.css";
import { useState } from "react";
const Nav = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  console.log(`Status of open flag ${isOpen}`);
  return (
    <>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <div className={styles.hamburger}>X Close</div> // Show an X when open
        ) : (
          <div className={styles.hamburger}>{"\u2630"} Menu</div> // Show hamburger when closed
        )}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
        <ul className={styles.navLinks}>
          <li>
            <button onClick={() => handleClick("Home")}> HOME </button>
          </li>
          {"|"}
          <li>
            <button onClick={() => handleClick("Hagsatra")}> HAGASATRA </button>
          </li>
          {"|"}
          <li>
            <button onClick={() => handleClick("Bandhagen")}>
              {" "}
              BANDHAGEN{" "}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
