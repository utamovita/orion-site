import styles from "./where.module.scss";
import backgroundImage from "public/assets/images/aboutUs/Map.png";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";

function Where() {
  // const { t } = useTranslation("about-us");
  return (
    <div className={styles.wrapper}>
      <Container>
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

export { Where };
