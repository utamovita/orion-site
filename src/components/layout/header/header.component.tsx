import { MainNavigation } from "@/components/layout/header/main-navigation/main-navigation.component";
import { Container } from "@/components/layout/utilities";
import React from "react";
import styles from "./header.module.scss";

type HeaderProps = {
  menuData: any;
};

function Header(props: HeaderProps) {
  const { menuData } = props;

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <a href="#">Orion</a>
        </div>
        <MainNavigation menuData={menuData} />
        <select name="lang" id="lang-select">
          {" "}
          <option value="pl">PL</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
        {/*kowal ma to zrobic niby */}
      </Container>
    </header>
  );
}

export { Header };
