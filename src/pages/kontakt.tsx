import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContactView } from "@components/views/contact";

export default function ContactPage() {
  return (
    <BaseLayout>
      <ContactView />
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "validation", "forms"])),
    },
  };
}
