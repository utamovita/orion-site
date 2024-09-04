import styles from "./who-we-are.module.scss";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";

function WhoWeAre() {
  const { t } = useTranslation("about-us");
  return (
    <div className={styles.wrapper}>
      <Container>
        <Stack className={styles.content}>
          <div className={styles.div}>TODO</div>
          <div className={styles.div}>
            <h2 className={styles.title}>{t("aboutUsBanner.title")}</h2>
            <p className={styles.subtitle}>{t("aboutUsBanner.subtitle")}</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export { WhoWeAre };
