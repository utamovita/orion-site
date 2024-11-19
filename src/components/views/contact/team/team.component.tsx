import styles from "./team.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import { team } from "@components/views/contact/team/team.config";
import Image from "next/image";
import HomeIconColored from "@components/views/contact/team/icons/home.icon";
import PhoneIconColored from "@components/views/contact/team/icons/phone.icon";
import ChatIconColored from "@components/views/contact/team/icons/chat.icon";

function Team() {
  const { t } = useTranslation("common");

  return (
    <Container>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          {t("contact.teamTitle1")}
          <span>{t("contact.teamTitle2")}</span>
        </h3>

        <div className={styles.team}>
          {team.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.content}>
                <h4 className={styles.name}>{item.name}</h4>
                <h5 className={styles.role}>{item.role}</h5>
                <ul className={styles.list}>
                  <li className={styles.element}>
                    <div className={styles.iconWrapper}>
                      <HomeIconColored />
                    </div>

                    {item.address}
                  </li>
                  <li className={styles.element}>
                    <div className={styles.iconWrapper}>
                      <PhoneIconColored />
                    </div>
                    {item.phone}
                  </li>
                  <li className={styles.element}>
                    <div className={styles.iconWrapper}>
                      <ChatIconColored />
                    </div>
                    {item.email}
                  </li>
                </ul>
              </div>

              <div className={styles.image}>
                <Image
                  src={item.img1}
                  alt={item.name}
                  width={400}
                  height={835}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export { Team };