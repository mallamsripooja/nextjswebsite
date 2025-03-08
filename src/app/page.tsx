import RecentEvents from "@/components/About/RecentEvents";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import News from "@/components/News";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import MembershipFeedback from "@/components/MembershipFeedback";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FlagshipEvents from "@/components/FlagshipEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surmandal",
  description: "In service of music since 1969",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <UpcomingConcerts />
      <FlagshipEvents />
      {/* <Brands /> */}
      <RecentEvents />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <News />
      <MembershipFeedback />
    </>
  );
}
