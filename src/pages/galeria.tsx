import { GalleryPageView } from "@components/views/gallery";
import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function GalleryPage() {
  return (
    <BaseLayout>
      <GalleryPageView />
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "gallery"])),
    },
  };
}
