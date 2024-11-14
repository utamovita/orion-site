import styles from "./who-we-are.module.scss";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";
import PunctualityIcon from "../../../shared/icons/punctuality.icon";
import SecurityIcon from "../../../shared/icons/security.icon";
import PartnershipIcon from "../../../shared/icons/partnership.icon";
import StarsIcon from "../../../shared/icons/stars.icon";

function WhoWeAre() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <Container>
        <Stack className={styles.content}>
          <div className={styles.section_Icons}>
            <div className={styles.section_Icons_Child}>
              <PunctualityIcon className={styles.svg} />
              <p>Terminowość</p>
              <StarsIcon className={styles.svg_Stars} />
            </div>
            <div className={styles.section_Icons_Child}>
              <SecurityIcon className={styles.svg} />
              <p>Bezpieczeństwo</p>
              <StarsIcon className={styles.svg_Stars} />
            </div>
            <div className={styles.section_Icons_Child}>
              <PartnershipIcon className={styles.svg} />
              <p>Partnerstwo</p>
              <StarsIcon className={styles.svg_Stars} />
            </div>
          </div>
          <div className={styles.section_whoWeAre}>
            <h2 className={styles.title}>{t("aboutUs.whoWeAre.title")}</h2>
            <p className={styles.subtitle}>{t("aboutUs.whoWeAre.subtitle")}</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export { WhoWeAre };
