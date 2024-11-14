import styles from "./LocalizationSection.module.scss";
import backgroundImage from "public/assets/images/aboutUs/Map.png";
import Image from "next/image";
import { Container } from "@design-system/layout/utilities";

function LocalizationSection() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.form}>
          <h2 className={styles.title}>Nasze nowoczesne biuro</h2>
          <p className={styles.text}>
            Jesteśmy zlokalizowani w samym centrum Bydgoszczy. Biuro naszej firmy wyposażone jest w nowoczesny oraz
            ergonomiczny sprzęt z najwyższej półki, zapewniający wygodę i efektywność pracy.
          </p>
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
