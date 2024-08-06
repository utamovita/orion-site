import styles from "./hamburger.module.scss";
import cx from "classnames";

interface HamburgerProps {
  setIsActiveHamburger: any; // Do zmiany typ (nie Function xd)
  isActiveHamburger: boolean;
}

function Hamburger({ setIsActiveHamburger, isActiveHamburger }: HamburgerProps) {
  const test = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };
  return (
    <div className={cx(styles.hamburger, { [styles.activeHamburgerTEST]: isActiveHamburger })} onClick={test}>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
    </div>
  );
}

export { Hamburger };
