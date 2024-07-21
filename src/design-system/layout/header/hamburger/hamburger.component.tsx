import styles from "./hamburger.module.scss";

interface HamburgerProps {
  setIsActiveNav: any; // Do zmiany typ (nie Function xd)
  isActiveNav: boolean;
}

function Hamburger({ setIsActiveNav, isActiveNav }: HamburgerProps) {
  const test = () => {
    setIsActiveNav(!isActiveNav);
  };
  return (
    <div className={styles.hamburger}>
      <p onClick={test}>X</p>
    </div>
  );
}

export { Hamburger };
