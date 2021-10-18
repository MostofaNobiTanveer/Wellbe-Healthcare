import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";

const NotFound = () => {
  return (
    <div className=" pt-16 pb-12">
      <ScrollToTop />
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <img
              className="h-20 w-auto"
              src="https://i.ibb.co/8Yg2k60/output-onlinepngtools.png"
              alt="Wellbe"
            />
          </Link>
        </div>
        <div className="py-10">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-indigo-400 hover:text-indigo-500"
              >
                Go back home<span> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
