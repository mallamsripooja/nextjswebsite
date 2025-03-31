import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Surmandal | Membership",
  description: "Join Surmandal family!",
};

const MembershipPage = () => {
  return (
    <>
      <section className="container mx-auto px-16 py-20 space-y-24 bg-gradient-to-b from-yellow-50 to-yellow-200">
        
        <div className="text-center">
          <h2 className="text-3xl pb-8 font-bold text-primary">Become a Part of Surmandal!</h2>
          <p className="text-primary text-lg pb-8" style={{ fontFamily: "Merriweather" }}>
            Become a member of Surmandal and be part of a vibrant community that appreciates and preserves the rich heritage of Indian classical music. Enjoy exclusive access to our concerts, support emerging and legendary artists, and contribute to the cultural legacy. Click on the registration button below and register today!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-16">
            <Image 
              src="/images/membership/members1.jpg" 
              width={300} height={160} 
              alt="Audience 1" 
              className="rounded-lg shadow-lg w-full h-60 object-fill" 
            />
            <Image 
              src="/images/membership/members2.jpg" 
              width={300} height={160} 
              alt="Audience 2" 
              className="rounded-lg shadow-lg w-full h-60 object-fill" 
            />
            <Image 
              src="/images/membership/members3.jpg" 
              width={300} height={160} 
              alt="Audience 3" 
              className="rounded-lg shadow-lg w-full h-60 object-fill" 
            />
          </div>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScnPC80Rbcw5vnIRkQahPqcWfLHNzbMgiY8bUXHsRp9hcChVA/viewform?usp=sf_link"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Join Surmandal
          </Link>
        </div>
      </section>
    </>
  );
};

export default MembershipPage;
