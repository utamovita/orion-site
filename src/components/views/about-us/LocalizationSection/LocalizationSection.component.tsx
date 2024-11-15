import styles from "./LocalizationSection.module.scss";
import { useTranslation } from "next-i18next";
import backgroundImage from "public/assets/images/aboutUs/Map.png";
import Image from "next/image";
import { Container } from "@design-system/layout/utilities";

function LocalizationSection() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.form}>
          <h2 className={styles.title}>{t("aboutUs.localization.title")}</h2>
          <p className={styles.text}>{t("aboutUs.localization.subtitle")}</p>
        </div>
        <Image
          alt="background image"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Container>
    </div>
  );
}

export { LocalizationSection };
