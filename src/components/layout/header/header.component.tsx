import { MainNavigation } from "@/components/layout/header/main-navigation/main-navigation.component";
import { Container } from "@/components/layout/utilities";
import React from "react";
import styles from "./header.module.scss";

type HeaderProps = {
  menuData: any;
};

function Header(props: HeaderProps) {
  const { menuData } = props;
  console.log(menuData);

  return (
    <header className={styles.header}>
      <Container>
        <div>logo</div>
        <MainNavigation menuData={menuData} />
        <div>lang switcher</div>
      </Container>
    </header>
  );
}

export { Header };
