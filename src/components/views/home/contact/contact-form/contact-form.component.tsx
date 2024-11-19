import styles from "./contact-form.module.scss";
import { useTranslation } from "next-i18next";

function ContactForm() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t("contactForm.title")}</h3>
    </div>
  );
}

export { ContactForm };
