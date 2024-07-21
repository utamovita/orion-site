import Link from "next/link";
import styles from "./main-navigation.module.scss";
import { navigationDataPL } from "@design-system/layout/header/main-navigation/config";

type NavigationItem = {
  title: string;
  link: string;
};

interface MainNavigationProps {
  isActiveNav: boolean;
}

function MainNavigation({ isActiveNav }: MainNavigationProps) {
  const data = navigationDataPL; //TODO: get data based on language

  return (
    <nav className={`${styles.nav} ${isActiveNav ? styles.active : ""}`}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={index} className={styles.element}>
            <Link href={item.link} className={styles.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { MainNavigation };
export type { NavigationItem };
