import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-10 px-4">
      <div className="w-full md:w-2/3 mx-auto flex flex-col items-center text-center">
        <div className="flex justify-center mb-6 bg-gray-800 rounded-full p-6">
          <Link to="/" className="inline-flex">
            <img
              className="h-20 w-auto"
              src="https://i.ibb.co/8Yg2k60/output-onlinepngtools.png"
              alt="Wellbe"
            />
          </Link>
        </div>
        <div className="">
          <h1 className="sm:text-4xl text-3xl mb-4 font-extrabold text-white">
            Welcome to Wellbe Health care Family
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            We believe that everyone should have access to convenient,
            affordable, and high-quality care. We are a one-stop-shop for your
            health, offering caring doctors, world-class diagnostics and much
            more.
          </p>
          <Link
            to="/doctors"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
