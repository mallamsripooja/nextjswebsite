"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

const FeedbackBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Share Your Thoughts
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Your feedback helps us enhance the Surmandal experience. Let us know your thoughts!
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSe1FrESZBEiQ6v2F-iOP223I1encjjGwUtf3k6CttTrSYIX4A/viewform?usp=dialog"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Feedback form
      </Link>
    </div>
  );
};

export default FeedbackBox;
