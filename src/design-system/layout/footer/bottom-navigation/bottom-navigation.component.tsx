import Link from "next/link";
import React from "react";
import styles from "./bottom-navigation.module.scss";
import { footerConfigPL } from "@design-system/layout/footer/config";

function BottomNavigation() {
  const data = footerConfigPL.bottomNavigation; //TODO: get data based on language

  return (
    <ul className={styles.bottomLinks}>
      {data.map((item, index) => (
        <li key={index} className={styles.bottomItem}>
          <Link href={item.link} className={styles.bottomLink}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { BottomNavigation };
