import { HomePageView } from "@components/views/home";
import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {
  return (
    <BaseLayout>
      <HomePageView />
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "validation", "forms"])),
    },
  };
}
