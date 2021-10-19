import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetchContext } from "../../contexts/FetchProvider";
import ScrollToTop from "../../utils/ScrollToTop";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const DocInfo = () => {
  const { name } = useParams();
  const { doctors, isLoading } = useFetchContext();
  const [doctorInfo, setDoctorInfo] = useState({});

  useEffect(() => {
    const selectedDoc = doctors.find((doctor) => doctor.docName === name);
    setDoctorInfo(selectedDoc);
    // eslint-disable-next-line
  }, [doctors]);

  if (isLoading) {
    return <Loader />;
  }

  const {
    docId,
    docName,
    docImage,
    docSpecialities,
    docQualifications,
    docAbout,
    docSchedule,
  } = doctorInfo;

  return (
    <section className="px-4 py-4">
      <ScrollToTop />
      <div className="bg-gray-800 w-full max-w-5xl mx-auto overflow-hidden shadow rounded-lg">
        <Link
          to="/doctors"
          className="text-gray-300 hover:text-white md:px-8 p-4 inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <div className="px-4 md:px-8 pb-6 flex flex-col">
          <div className="md:h-44 mb-4 md:w-44 h-32 w-32 rounded-lg overflow-hidden">
            <img
              className="h-full w-ful object-cover object-center"
              src={docImage}
              alt={docName}
            />
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-start">
            <div>
              <h3 className="mt-2 text-xl md:text-3xl leading-6 font-medium text-gray-100">
                {docName}
              </h3>
              <p className="mt-1 max-w-2xl text-xs uppercase font-bold text-gray-400">
                {Array.isArray(docSpecialities)
                  ? docSpecialities.join(", ")
                  : docSpecialities}
              </p>
            </div>
            <div>
              <Link
                to={`/doctor/${docName}/${docId}`}
                className="mt-4 inline-flex items-center md:px-6 md:py-3 px-2.5 py-1.5 border border-transparent text-sm font-normal rounded shadow-sm text-white bg-purple-500 hover:bg-purple-600 focus:outline-none"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <dl>
            <div className="bg-gray-800 px-4 md:px-8 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-lg font-medium text-purple-400">Full name</dt>
              <dd className="mt-1 text-base text-gray-300 sm:mt-0 sm:col-span-2">
                {docName}
              </dd>
            </div>
            <div className="border-t border-gray-700 bg-gray-800 px-4 md:px-8 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-lg font-medium text-purple-400">
                Specialities​
              </dt>
              <dd className="mt-1 text-base capitalize text-gray-300 sm:mt-0 sm:col-span-2">
                {Array.isArray(docSpecialities)
                  ? docSpecialities.join(", ")
                  : docSpecialities}
              </dd>
            </div>
            <div className="border-t border-gray-700 bg-gray-800 px-4 md:px-8 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-lg font-medium text-purple-400">
                Qualifications
              </dt>
              <dd className="mt-1 text-base text-gray-300 sm:mt-0 sm:col-span-2">
                {docQualifications}
              </dd>
            </div>
            <div className="border-t border-gray-700 bg-gray-800 px-4 md:px-8 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-lg font-medium text-purple-400">About</dt>
              <dd className="mt-1 text-base text-gray-300 sm:mt-0 sm:col-span-2">
                {docAbout}
              </dd>
            </div>
            <div className="border-t border-gray-700 bg-gray-800 px-4 md:px-8 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-lg font-medium text-purple-400">Schedules</dt>
              <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                <ul>
                  {docSchedule?.map((schedule, index) => {
                    const { day, time } = schedule;
                    return (
                      <li
                        key={index}
                        className="bg-gray-700 px-3 py-1.5 rounded mb-2 flex items-center justify-between"
                      >
                        <p className="font-semibold text-gray-100 text-base">
                          {day}
                        </p>
                        <p className="bg-gray-600 shadow-lg px-6 py-0.5 font-semibold rounded text-white">
                          {time}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default DocInfo;
