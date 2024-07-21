import { LangSwitcher } from "@design-system/layout/header/lang-switcher/lang-switcher.component";
import { Logo } from "@design-system/layout/header/logo/logo.component";
import { MainNavigation } from "@design-system/layout/header/main-navigation/main-navigation.component";
import { Hamburger } from "@design-system/layout/header/hamburger/hamburger.component";
import { Container } from "@design-system/layout/utilities";
import React, { useState } from "react";
import styles from "./header.module.scss";

function Header() {
  const [isActiveNav, setIsActiveNav] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.test}>
        <div className={styles.wrapper}>
          <Logo />
          <MainNavigation isActiveNav={isActiveNav} />
          <LangSwitcher />
          <Hamburger setIsActiveNav={setIsActiveNav} isActiveNav={isActiveNav} />
        </div>
      </Container>
    </header>
  );
}

export { Header };
