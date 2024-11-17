import styles from "./work.module.scss";
// import { useTranslation } from "next-i18next";
import backgroundImage from "../../../../../public/assets/images/career/work.jpg";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import { Button } from "../../../shared/button/button.component";
import { ArrowIcon } from "../../../shared/icons/arrow.icon";
import Image from "next/image";

function Work() {
  //   const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <FlexComponent className={styles.flex}>
          <div className={styles.section}>
            <h2 className={styles.title}>
              Praca w Grand <br></br>Transport Logistics
            </h2>
            <p className={styles.subtitle}>
              Praca w Grand Transport Logistics to dla Ciebie idealna szansa na poszerzenie oferty transportowej lub
              rozwinięcie swoich umiejętności spedycyjnych. Współpraca w projektach, atrakcyjny system wynagrodzenia czy
              też stałe poszerzanie swoich umiejętności to tylko kilka cech, które charakteryzują naszą działalność.
            </p>
            <h2 className={styles.secondTitle}>Dostępne Stanowiska</h2>
            <div className={styles.buttons}>
              <Button className={styles.button}>
                Przewoźnik <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                Kierowca <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                Dyspozytor <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                Spedytor <ArrowIcon className={styles.arrow} />
              </Button>
              <Button className={styles.button}>
                <span>Administracja</span> <ArrowIcon className={styles.arrow} />
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
