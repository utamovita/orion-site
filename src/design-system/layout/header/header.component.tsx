import { LangSwitcher } from "@design-system/layout/header/lang-switcher/lang-switcher.component";
import { Logo } from "@design-system/layout/header/logo/logo.component";
import { MainNavigation } from "@design-system/layout/header/main-navigation/main-navigation.component";
import { Container } from "@design-system/layout/utilities";
import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <MainNavigation />
          <LangSwitcher />
        </div>
      </Container>
    </header>
  );
}

export { Header };
