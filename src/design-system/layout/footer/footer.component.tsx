import React from "react";
import { Container } from "@design-system/layout/utilities";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.navLinks}>
          <li className={styles.footerItem}>
            <a href="https://x.com/?lang=pl">Twitter</a>
          </li>
          <li className={styles.footerItem}>
            <a href="https://web.telegram.org/k/">Telegram</a>
          </li>
          <li className={styles.footerItem}>
            <a href="https://discord.com/">Discord</a>
          </li>
          <li className={styles.footerItem}>
            <a href="https://www.instagram.com/?hl=pl">Instagram</a>
          </li>
        </ul>
        <ul className={styles.bottomLinks}>
          <li className={styles.footerItem}>
            <a href="#" className={styles.footerLink}>
              Polityka Prywatności
            </a>
          </li>
          <li className={styles.footerItem}>
            <a href="#" className={styles.footerLink}>
              Pliki Cookies
            </a>
          </li>
          <li className={styles.footerItem}>Designed by DemoArtStation</li>
        </ul>
      </Container>
    </footer>
  );
}

export { Footer };
