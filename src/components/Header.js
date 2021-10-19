import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-700 lg:border-none">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="sr-only">Wellbe</span>
              <img
                className="h-10 w-auto"
                src="https://i.ibb.co/8Yg2k60/output-onlinepngtools.png"
                alt="logo"
              />
              <p className="text-gray-100 text-xl md:text-2xl font-medium">
                WellBe
              </p>
            </Link>
          </div>
          <div className="hidden ml-10 space-x-8 lg:block">
            <Link
              to="/"
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              Our Doctors
            </Link>

            <Link
              to="/about"
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              About Us
            </Link>
            {/* <Link
              to="/appoinments"
              className="text-base font-medium text-white hover:text-indigo-50"
              
            >
              Your Appointments
            </Link> */}
            <Link
              to="/faq"
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              FAQ
            </Link>

            <Link
              to="/privacy&policies"
              className="text-sm font-medium text-white hover:text-indigo-50"
            >
              Terms
            </Link>
          </div>
          {/* {user?.email ? (
                  <div className="flex items-start gap-x-4">
                    <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                      {user?.photoURL ? (
                        <img
                          className="inline-block h-full w-full rounded-full"
                          src={user?.photoURL}
                          alt=""
                        ></img>
                      ) : (
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </span>
                    <div className="flex flex-col justify-between items-start">
                      <div className="text-xl font-medium text-gray-900">
                        {user?.displayName}
                      </div>
                      <button
                        onClick={userSignOut}
                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      to="/signup"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/signin"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                )} */}
          <div className="ml-10 space-x-3">
            <Link
              to="/signup"
              className="inline-block bg-indigo-400 py-1 px-3 border border-transparent rounded-md text-sm font-medium text-white hover:bg-opacity-75"
            >
              Sign up
            </Link>
            <Link
              to="/signin"
              className="inline-block bg-gray-600 py-1 px-3 border border-transparent rounded-md text-sm font-medium text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-indigo-50"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="text-sm font-medium text-white hover:text-indigo-50"
          >
            Doctors
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-white hover:text-indigo-50"
          >
            About
          </Link>
          {/* <Link
            to="/appoinments"
            className="text-sm font-medium text-white hover:text-indigo-50"
            
          >
            Appointments
          </Link> */}
          <Link
            to="/faq"
            className="text-sm font-medium text-white hover:text-indigo-50"
          >
            FAQ
          </Link>
          <Link
            to="/privacy&policies"
            className="text-sm font-medium text-white hover:text-indigo-50"
          >
            Terms
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
