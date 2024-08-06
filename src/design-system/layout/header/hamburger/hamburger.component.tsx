import styles from "./hamburger.module.scss";
import cx from "classnames";

interface HamburgerProps {
  setIsNavOpen: any; // Do zmiany typ (nie Function xd)
  isNavOpen: boolean;
}

function Hamburger({ setIsNavOpen, isNavOpen }: HamburgerProps) {
  const test = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={cx(styles.hamburger, { [styles.activeHamburger]: isNavOpen })} onClick={test}>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
    </div>
  );
}

export { Hamburger };
