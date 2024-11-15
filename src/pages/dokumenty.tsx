import { BaseLayout } from "@design-system/layout/base-layout.component";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import {DocumentsView} from "@components/views/documents";

export default function DocumentsPage() {
  return <BaseLayout><DocumentsView/></BaseLayout>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
