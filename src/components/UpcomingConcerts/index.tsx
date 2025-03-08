import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const UpcomingConcerts = () => {
  return (
    <>
      <section id="upcomingconcerts" className="py-2 md:py-3 lg:py-1">
        <div className="container">
          <SectionTitle
            title="Upcoming Concerts"
            paragraph="Experience the magic of live classical music."
            center
          />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/concerts/uttardakshin1march2025.jpeg"
                  alt="Uttar Dakshin concert poster"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Uttar Dakshin 14th season (Hyderabad)
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    1st March 2025 | 6:30 PM | JNAFAU, Hyderabad
                    <br></br>Tickets available on BookMyShow.
                    <br></br>Note: Entry is free for Surmandal members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingConcerts;
