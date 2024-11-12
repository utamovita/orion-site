import Link from "next/link";
import React from "react";
import styles from "./footer-navigation.module.scss";
import { footerConfigPL } from "@design-system/layout/footer/config";

type FooterItem = {
  title: string;
  link: string;
};

function FooterNavigation() {
  const data = footerConfigPL.mainNavigation; //TODO: get data based on language

  return (
    <ul className={styles.footerList}>
      {data.map((item, index) => (
        <li key={index} className={styles.footerItem}>
          <Link href={item.link} target="_blank">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { FooterNavigation };
export type { FooterItem };
