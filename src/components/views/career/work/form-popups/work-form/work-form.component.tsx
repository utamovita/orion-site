import styles from "../work-form/work-form.module.scss";
import { useTranslation } from "next-i18next";
import { Spinner, SpinnerWrapper } from "@components/shared/spinner/spinner.component";
import { Button } from "@components/shared/button/button.component";
import { FormFieldsRenderer } from "@components/shared/form/form-fields-renderer.component";
import {useWorkForm} from "@components/views/career/work/form-popups/work-form/use-work-form.hook";
import {
     useWorkFormConfig
} from "@components/views/career/work/form-popups/work-form/use-work-form-config.hook";

function WorkForm() {
  const { t } = useTranslation();
  const isLoading = false;
  const { onSubmit, control } = useWorkForm();
  const { fieldList } = useWorkFormConfig();

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

export { WorkForm };
