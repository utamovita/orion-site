import { BaseLayout } from "@design-system/layout/base-layout.component";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function DocumentsPage() {
  return <BaseLayout>documenty</BaseLayout>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
