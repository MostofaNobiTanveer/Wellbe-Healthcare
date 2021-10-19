import React, { useEffect, useState } from "react";
import DocCard from "../../components/DocCard";
import Loader from "../../components/Loader";
import { useFetchContext } from "../../contexts/FetchProvider";
import ScrollToTop from "../../utils/ScrollToTop";

const getLocalStorage = () => {
  let name = localStorage.getItem("specialities_name");
  if (name) {
    return localStorage.getItem("specialities_name");
  } else {
    return "all";
  }
};

const Doctors = () => {
  const [speciality, setSpeciality] = useState(getLocalStorage());
  const { doctors, isLoading } = useFetchContext();
  const [filteredDoc, setFilteredDoc] = useState([]);

  useEffect(() => {
    if (speciality === "all") {
      setFilteredDoc(doctors);
    } else {
      const newList = doctors.filter((doctor) =>
        doctor.docSpecialities.includes(speciality)
      );
      setFilteredDoc(newList);
    }
  }, [speciality, doctors]);

  useEffect(() => {
    localStorage.setItem("specialities_name", speciality);
  }, [speciality]);

  if (isLoading) {
    return <Loader />;
  }

  const doctorSpecialities = [
    ...new Set(doctors.map((doctor) => doctor.docSpecialities).flat()),
  ];

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
          <div className="w-full max-w-2xl">
            <label
              htmlFor="specialites"
              className="block text-lg font-medium text-purple-400"
            >
              Search by specialty
            </label>
            <select
              id="specialites"
              name="specialites"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="bg-gray-900 cursor-pointer capitalize mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-300 border-2 border-gray-500 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            >
              <option>all</option>
              {doctorSpecialities.map((speciality, index) => {
                return <option key={index}>{speciality}</option>;
              })}
            </select>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {filteredDoc?.map((doctor) => (
              <DocCard key={doctor.docId} {...doctor} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
