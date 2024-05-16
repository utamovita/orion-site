import React from "react";
import styles from "./main-navigation.module.scss";

type MainNavigationProps = {
  menuData: any;
};

function MainNavigation(props: MainNavigationProps) {
  const { menuData } = props;

  console.log("menuData", menuData);
  return <nav className={styles.nav}>nav todo</nav>;
}

export { MainNavigation };
