import styles from "./main-banner.module.scss";
import { useTranslation } from "next-i18next";
import { Container, FlexComponent, Stack } from "@design-system/layout/utilities";
import backgroundImage from "public/assets/images/home/banner.jpg";
import Image from "next/image";
import { ButtonLink } from "@components/shared/button/button-link.component";

function MainBanner() {
  const { t } = useTranslation("home");

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
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
      <Container>
        <Stack className={styles.content}>
          <h1 className={styles.title}>{t("mainBanner.title")}</h1>
          <p className={styles.subtitle}>{t("mainBanner.subtitle")}</p>
          <FlexComponent className={styles.btnWrapper} flexWrap={"wrap"}>
            <ButtonLink to={"/o-nas"}>{t("mainBanner.aboutUs")}</ButtonLink>
            <ButtonLink to={"/kontakt"} variant={"secondary"}>
              {t("mainBanner.contactUs")}
            </ButtonLink>
          </FlexComponent>
        </Stack>
      </Container>
    </div>
  );
}

export { MainBanner };
