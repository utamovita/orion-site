import { HomePageView } from "@components/views/home";
import { BaseLayout } from "@design-system/layout/base-layout.component";

export default function Page() {
  return (
    <BaseLayout>
      <HomePageView />
    </BaseLayout>
  );
}
