import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {GalleryView} from "@components/views/gallery";

export default function GalleryPage() {
  return <BaseLayout><GalleryView/></BaseLayout>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "gallery"])),
    },
  };
}
