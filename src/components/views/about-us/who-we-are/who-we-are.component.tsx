import styles from "./who-we-are.module.scss";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";

function WhoWeAre() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <Container>
        <Stack className={styles.content}>
          <div className={styles.section}>TODO</div>
          <div className={styles.section}>
            <h2 className={styles.title}>{t("aboutUs.whoWeAre.title")}</h2>
            <p className={styles.subtitle}>{t("aboutUs.whoWeAre.subtitle")}</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export { WhoWeAre };
