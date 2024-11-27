import React from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./agreements.module.scss";

export type AgreementsProps = {
  isInvalid?: boolean;
};

function Agreements({ isInvalid = false }: AgreementsProps) {
  return (
    <p className={cx(styles.text, { [styles.invalid]: isInvalid })}>
      Zaakceptuj nasz{" "}
      <Link href={"/privacy-policy"} className={styles.link}>
        regulamin
      </Link>
      .
    </p>
  );
}

export { Agreements };
