import React from "react";
import styles from "./main-navigation.module.scss";

type MainNavigationProps = {
  menuData: any;
};

function MainNavigation(props: MainNavigationProps) {
  const { menuData } = props;

  console.log("menuData", menuData);
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li className={`${styles.navItem} ${styles.active}`}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            O nas
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Galeria
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Kariera
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Dokumenty
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { MainNavigation };
