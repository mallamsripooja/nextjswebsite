import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Surmandal | Feedback",
  description: "Drop your feedback here. We value your suggestions!",
};

const FeedbackPage = () => {
  return (
    <>
      <section className="container mx-auto px-16 py-20 space-y-24 bg-gradient-to-b from-yellow-50 to-yellow-200">
        
        <div className="text-center">
          <h2 className="text-3xl pb-8 font-bold text-primary">Share Your Experience</h2>
          <p className="text-primary text-lg pb-16" style={{ fontFamily: "Merriweather" }}>
            Your feedback helps us enhance the Surmandal experience. Whether it’s about a recent concert or your overall journey with us, we’d love to hear your thoughts. Share your suggestions, and let’s continue celebrating Indian classical music together!
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1FrESZBEiQ6v2F-iOP223I1encjjGwUtf3k6CttTrSYIX4A/viewform?usp=dialog"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Open feedback form
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeedbackPage;