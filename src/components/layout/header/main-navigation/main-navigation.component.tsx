import React from "react";
import styles from "./main-navigation.module.scss";

type MainNavigationProps = {
  menuData: any;
};

function MainNavigation(props: MainNavigationProps) {
  const { menuData } = props;

  console.log("menuData", menuData);
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.active}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            O nas
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Galeria
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Kariera
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Dokumenty
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { MainNavigation };
