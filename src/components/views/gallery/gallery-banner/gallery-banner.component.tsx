import styles from "./gallery-banner.module.scss";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";
import backgroundImage from "public/assets/images/gallery/gallery-banner.png";
import Image from "next/image";

function GalleryBanner() {
  const { t } = useTranslation("gallery");

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
          <h1 className={styles.title}>{t("galleryBanner.title")}</h1>
        </Stack>
      </Container>
    </div>
  );
}

export { GalleryBanner };
