import styles from "../work-form/work-form.module.scss";
import { useTranslation } from "next-i18next";
import { Spinner, SpinnerWrapper } from "@components/shared/spinner/spinner.component";
import { Button } from "@components/shared/button/button.component";
import { FormFieldsRenderer } from "@components/shared/form/form-fields-renderer.component";
import { useCarrierForm } from "@components/views/career/work/form-popups/carrier-form/use-carrier-form.hook";
import { useCarrierFormConfig } from "@components/views/career/work/form-popups/carrier-form/use-carrier-form-config.hook";

function CarrierForm() {
  const { t } = useTranslation();
  const isLoading = false;
  const { onSubmit, control } = useCarrierForm();
  const { fieldList } = useCarrierFormConfig();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("career.form.title")}</h2>
      <SpinnerWrapper show={isLoading}>
        <Spinner show={isLoading} />
      </SpinnerWrapper>

      <form onSubmit={onSubmit}>
        <div className={styles.formWrapper}>
          <FormFieldsRenderer fieldList={fieldList} control={control} />

          <div className={styles.btnWrapper}>
            <Button type={"submit"} variant={"secondary"}>
              {t("forms:submit")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { CarrierForm };
