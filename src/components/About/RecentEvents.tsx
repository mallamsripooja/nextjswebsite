"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const RecentEvents = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" style={{ backgroundImage: "url('/images/about/recentevents_bg.png')" }} >
      <div className="container">
        <SectionTitle
          title="Recents Events"
          paragraph="Echoes of Excellence – A Glimpse into Our Recent Events!"
          center
          mb="80px"
        />


        {/* Image Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="w-full max-w-[400px] h-[500px] mx-auto relative">
            <Image 
              src="/images/concerts/uttardakshin1march2025.jpeg" 
              alt="Event 1" 
              layout="fill"
              objectFit="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full max-w-[400px] h-[500px] mx-auto relative">
            <Image 
              src="/images/about/triveniseason2flyer.jpg" 
              alt="Event 2" 
              layout="fill"
              objectFit="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full max-w-[400px] h-[500px] mx-auto relative">
            <Image 
              src="/images/about/sursapthak.jpg" 
              alt="Event 3" 
              layout="fill"
              objectFit="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default RecentEvents;
