import { Contact } from "@components/views/home/contact/contact.component";
import { MeetUs } from "@components/views/home/meet-us/meet-us.component";
import { OurOffer } from "@components/views/home/our-offer/our-offer.component";
import { WhereToFind } from "@components/views/home/where-to-find/where-to-find.component";
import { MainBanner } from "./main-banner/main-banner.component";

function HomePageView() {
  return (
    <>
      <MainBanner />
      <MeetUs />
      <WhereToFind />
      <OurOffer />
      <Contact />
    </>
  );
}

export { HomePageView };
