import React from "react";
import { Link } from "react-router-dom";

const specialtyList = [
  "Cardiology",
  "Dentistry",
  "Dermatology",
  "Diabetology",
  "Family Medicine",
  "Gastroenterology",
  "Gynaecology",
  "Hepatology",
  "Neuro Medicine",
  "Nutrition",
  "Obstetrics",
  "Ophthalmology",
  "Pediatrics",
  "Physiotherapy",
  "Psychology",
  "Respiratory Medicine",
  "Pulmonary & Critical Care Medicine",
  "Urology",
];

const SpecialityList = () => {
  return (
    <section className="text-gray-400 bg-gray-900">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-center title-font text-white mb-4">
            Services Given by Our Specialist Doctors
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            At Wellbe you will be treated by caring, internationally trained
            doctors. They take the time to listen to you and understand your
            healthcare needs.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {specialtyList.map((item, index) => {
            return (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    {item}
                  </span>
                </div>
              </div>
            );
          })}
          <Link
            to="/doctors"
            className="flex mx-auto mt-8 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
          >
            Browse our doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialityList;
