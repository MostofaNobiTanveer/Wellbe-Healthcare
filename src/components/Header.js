import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useAuthContext();
  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
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
              className="text-base font-medium text-white hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-base font-medium text-white hover:text-gray-400"
            >
              Our Doctors
            </Link>

            <Link
              to="/about"
              className="text-base font-medium text-white hover:text-gray-400"
            >
              About Us
            </Link>
            {/* <Link
              to="/appoinments"
              className="text-base font-medium text-white hover:text-gray-400"
              
            >
              Your Appointments
            </Link> */}
            <Link
              to="/faq"
              className="text-base font-medium text-white hover:text-gray-400"
            >
              FAQ
            </Link>

            <Link
              to="/privacy&policies"
              className="text-sm font-medium text-white hover:text-gray-400"
            >
              Terms
            </Link>
          </div>
          {user?.email ? (
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-between items-end">
                <div className="text-base text-gray-100">
                  {user?.displayName}
                </div>
                <button
                  onClick={userSignOut}
                  className="whitespace-nowrap text-sm font-medium text-purple-500 hover:bg-gray-600 pb-0.5 px-2 -mr-1 rounded"
                >
                  Sign out
                </button>
              </div>
              <span className="inline-block h-12 w-12 shadow-lg rounded-full overflow-hidden bg-gray-100">
                {user?.photoURL ? (
                  <img
                    className="block h-full w-full object-cover object-center"
                    src={user?.photoURL}
                    alt={user.displayName}
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
            </div>
          ) : (
            <div className="ml-10 space-x-3">
              <Link
                to="/signup"
                className="inline-block bg-purple-500 py-1 px-3 border border-transparent rounded-md text-sm font-medium text-white hover:bg-opacity-75"
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
          )}
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-gray-400"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="text-sm font-medium text-white hover:text-gray-400"
          >
            Doctors
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-white hover:text-gray-400"
          >
            About
          </Link>
          {/* <Link
            to="/appoinments"
            className="text-sm font-medium text-white hover:text-gray-400"
            
          >
            Appointments
          </Link> */}
          <Link
            to="/faq"
            className="text-sm font-medium text-white hover:text-gray-400"
          >
            FAQ
          </Link>
          <Link
            to="/privacy&policies"
            className="text-sm font-medium text-white hover:text-gray-400"
          >
            Terms
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
