import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-10 bg-gray-900 px-4 relative overflow-hidden">
      <div className="relative h-full max-w-7xl mx-auto">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/3 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                length=""
                x="0"
                y="0"
                width="2"
                height="2"
                className="text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            length=""
            width="404"
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/3 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                length=""
                x="0"
                y="0"
                width="2"
                height="2"
                className="text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            length=""
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
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
        <div className="z-20">
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
            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
