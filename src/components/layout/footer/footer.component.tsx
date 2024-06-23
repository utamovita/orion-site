import React from "react";
import styles from "./footer.module.scss";

type FooterProps = {
  footerData: any;
};

function Footer(props: FooterProps) {
  const { footerData } = props;

  console.log("footerData", footerData);
  return (
    <footer className={styles.footer}>
      <ul className={styles.navLinks}>
        <li>
          <a href="https://x.com/?lang=pl">Twitter</a>
        </li>
        <li>
          <a href="https://web.telegram.org/k/">Telegram</a>
        </li>
        <li>
          <a href="https://discord.com/">Discord</a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=pl">Instagram</a>
        </li>
        {/*Nie moge dodac strzalki przez material UI, nie moge zainstalowac paczki? */}
      </ul>
      <ul className={styles.bottomLinks}>
        <li>
          <a href="#">Polityka Prywatności</a>
        </li>
        <li>
          <a href="#">Pliki Cookies</a>
        </li>
        <li>Designed by DemoArtStation</li>
      </ul>
    </footer>
  );
}

export { Footer };
