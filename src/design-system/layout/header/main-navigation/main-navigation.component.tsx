import Link from "next/link";
import styles from "./main-navigation.module.scss";
import { useMainNavigation } from "@design-system/layout/header/main-navigation/use-main-navigation.hook";
import { useRouter } from "next/router";
import cx from "classnames";

type NavigationItem = {
  title: string;
  link: string;
};

interface MainNavigationProps {
  isActiveHamburger: boolean;
}

function MainNavigation({ isActiveHamburger }: MainNavigationProps) {
  const { data } = useMainNavigation();
  const router = useRouter();

  console.log(router);
  return (
    <nav className={`${styles.nav} ${isActiveHamburger ? styles.activeHamburger : ""}`}>
      <ul className={styles.list}>
        {data.map((item, index) => {
          console.log(item.link);
          const isActive = router.asPath === item.link;

          return (
            <li key={index} className={styles.element}>
              <Link href={item.link} className={cx(styles.link, { [styles.active]: isActive })}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { MainNavigation };
export type { NavigationItem };
