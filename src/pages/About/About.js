import React from "react";
import ScrollToTop from "../../utils/ScrollToTop";

const About = () => {
  return (
    <section className="text-gray-400 bg-gray-900">
      <ScrollToTop />
      <div className="container px-5 space-y-12 py-12 mx-auto">
        <div className="lg:w-3/5 mx-auto space-y-4 sm:space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            About us
          </h2>
          <p className="text-base text-gray-400">
            We are on a mission to bring better care to Bangladesh! We believe
            that everyone should have access to high quality, affordable and
            compassionate care. This belief is what unifies us all at Wellbe.
          </p>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-500 bg-gray-800 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              Quality Services
            </h2>
            <p className="leading-normal text-base">
              Wellbe exists to provide a better patient experience. We are a
              one-stop-shop for your health, offering caring doctors,
              world-class diagnostics and much more.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              Affordable services
            </h2>
            <p className="leading-relaxed text-base">
              We provide best-in-class care at a price you can afford. We work
              hard to reduce our cost, so more Bangladeshis can have access to
              great care.
            </p>
          </div>
          <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-purple-500 bg-gray-800 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-500 bg-gray-800 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              50+ Doctors
            </h2>
            <p className="leading-relaxed text-base">
              Wellbe ensure best services in affordable price. Our world
              classdoctors are always ready to serve you better services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
