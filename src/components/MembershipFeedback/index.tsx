import FeedbackBox from "./FeedbackForm";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Become a Part of Surmandal!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Join us in celebrating the rich legacy of Indian classical music. 
                <br></br>Sign up for membership today!
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScnPC80Rbcw5vnIRkQahPqcWfLHNzbMgiY8bUXHsRp9hcChVA/viewform?usp=sf_link"
                className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Membership registration/renewal form
              </Link>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <FeedbackBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
