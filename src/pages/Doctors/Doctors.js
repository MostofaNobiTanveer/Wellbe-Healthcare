import React from "react";
import DocCard from "../../components/DocCard";
import Loader from "../../components/Loader";
import { useFetchContext } from "../../contexts/FetchProvider";
import ScrollToTop from "../../utils/ScrollToTop";

const Doctors = () => {
  const { doctors, isLoading } = useFetchContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-900">
      <ScrollToTop />
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Our Doctors
            </h2>
            <p className="text-lg text-gray-400">
              At Wellbe, Family Medicine Doctors as well as Visiting Specialists
              take care of you. Our doctors have years of local and
              international experience and treat you with the respect and
              empathy you deserve.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="w-full">
              <label
                for="location"
                className="block text-lg font-medium text-indigo-400"
              >
                Search by specialty
              </label>
              <select
                id="location"
                name="location"
                className="bg-gray-900 mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-300 border-gray-500 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              >
                {doctors?.map(({ docId, docSchedule }) => {
                  return (
                    <option key={docId}>
                      {docSchedule.map(({ day }) => day)}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full">
              <label
                for="location"
                className="block text-lg font-medium text-indigo-400"
              >
                Search by availability
              </label>
              <select
                id="location"
                name="location"
                className="bg-gray-900 mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-300 border-gray-500 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              >
                <option className="py-6">USA</option>
                <option selected>Canada</option>
                <option>EU</option>
              </select>
            </div>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {doctors.map((doctor) => (
              <DocCard key={doctor.docId} {...doctor} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
