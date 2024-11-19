import Link from "next/link";
import React from "react";
import styles from "./bottom-navigation.module.scss";
import { footerConfigPL } from "@design-system/layout/footer/config";
import cx from "classnames";

function BottomNavigation() {
  const data = footerConfigPL.bottomNavigation; //TODO: get data based on language

  return (
      <div className={styles.wrapper}>
        <ul className={styles.bottomLinks}>
          {data.map((item, index) => (
            <li key={index} className={styles.bottomItem}>
              <Link href={item.link} className={styles.bottomLink} target={"_blank"} rel="noopener noreferrer">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
         <Link href={"https://focusite.pl"} className={cx(styles.bottomItem, styles.poweredBy)} target={"_blank"} rel="noopener noreferrer">
          Powered by <span>focusite</span>
        </Link>
      </div>
  );
}

export { BottomNavigation };
