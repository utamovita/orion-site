import styles from "./work.module.scss";
import { useTranslation } from "next-i18next";
import backgroundImage from "../../../../../public/assets/images/career/work.jpg";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import { Button } from "../../../shared/button/button.component";
import { ArrowIcon } from "../../../shared/icons/arrow.icon";
import Image from "next/image";

function Work() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <FlexComponent className={styles.flex}>
          <div className={styles.section}>
            <h2 className={styles.title}>
              {t("career.subtitle.firstHalf")} <br></br>
              {t("career.subtitle.secondHalf")}
            </h2>
            <p className={styles.subtitle}>{t("career.text")}</p>
            <h2 className={styles.secondTitle}>{t("career.work.title")}</h2>
            <div className={styles.buttons}>
              <Button className={styles.button}>
                {t("career.work.carrier")} <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                {t("career.work.driver")} <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                {t("career.work.dispatcher")} <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                {t("career.work.forwarder")} <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                <span>{t("career.work.administration")}</span> <ArrowIcon className={styles.arrow} />
              </Button>
            </div>
          </div>
          <div className={styles.section}>
            <Image
              alt="background image"
              src={backgroundImage}
              placeholder="blur"
              quality={100}
              width={811}
              height={610}
              className={styles.image}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </FlexComponent>
      </Container>
    </div>
  );
}

export { Work };
