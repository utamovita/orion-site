import { MainBanner } from "./main-banner/main-banner.component";
import { WhoWeAre } from "./who-we-are/who-we-are.component";
import { Where } from "./where/where.component";
import { More } from "./more/more.component";

function AboutUsView() {
  return (
    <>
      <MainBanner />
      <WhoWeAre />
      <Where />
      <More />
    </>
  );
}

export { AboutUsView };
