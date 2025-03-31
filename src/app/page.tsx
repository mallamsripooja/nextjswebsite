import RecentEvents from "@/components/About/RecentEvents";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import News from "@/components/News";
import Collaborations from "@/components/Collaborations";
import ScrollUp from "@/components/Common/ScrollUp";
import MembershipFeedback from "@/components/MembershipFeedback";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FlagshipEvents from "@/components/FlagshipEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surmandal | In service of music since 1969",
  description: "Surmandal, founded in 1969, is a renowned organization dedicated to promoting Indian classical music in Hyderabad. Through concerts, festivals, and artist collaborations, Surmandal continues to celebrate and preserve the rich heritage of classical music.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <UpcomingConcerts />
      <FlagshipEvents />
      {/* <Collaborations /> */}
      <RecentEvents />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <News />
      <MembershipFeedback />
    </>
  );
}
