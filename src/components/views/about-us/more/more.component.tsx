import styles from "./more.module.scss";
import backgroundImage from "public/assets/images/aboutUs/moreAboutUs.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";

function More() {
  const { t } = useTranslation("about-us");
  return (
    <div className={styles.wrapper}>
      <Container>
        <Stack className={styles.content}>
          <div className={styles.div}>
            <h2 className={styles.title}>{t("more.title")}</h2>
            <p className={styles.subtitle}>{t("more.subtitle")}</p>
          </div>
          <div className={styles.div}>
            <Image
              alt="background image"
              src={backgroundImage}
              placeholder="blur"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export { More };
