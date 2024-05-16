import React from "react";
import styles from "./footer.module.scss";

type FooterProps = {
  footerData: any;
};

function Footer(props: FooterProps) {
  const { footerData } = props;

  console.log("footerData", footerData);
  return <footer className={styles.footer}>footer todo</footer>;
}

export { Footer };
