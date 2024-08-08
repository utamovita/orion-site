import { useHeaderDispatch, useHeaderState } from "../providers/header.context";
import styles from "./hamburger.module.scss";
import cx from "classnames";

function Hamburger() {
  const { isMenuOpen } = useHeaderState();
  const headerDispatch = useHeaderDispatch();

  const toggleMenu = () => {
    if (isMenuOpen) {
      headerDispatch({ type: "HIDE_MENU" });
    } else headerDispatch({ type: "SHOW_MENU" });
  };

  return (
    <div className={cx(styles.hamburger, { [styles.activeHamburger]: isMenuOpen })} onClick={toggleMenu}>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
      <span className={styles.navHamburgerSpan}></span>
    </div>
  );
}

export { Hamburger };
