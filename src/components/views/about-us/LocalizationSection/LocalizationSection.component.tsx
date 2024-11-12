import styles from "./LocalizationSection.module.scss";
import backgroundImage from "public/assets/images/aboutUs/Map.png";
import Image from "next/image";
import { Container } from "@design-system/layout/utilities";

function LocalizationSection() {
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

export { LocalizationSection };
