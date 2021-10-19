import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useFetchContext } from "../../contexts/FetchProvider";
import Alert from "../../utils/Alert";
import ScrollToTop from "../../utils/ScrollToTop";

const BookAppoinment = () => {
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [formValues, setFormValues] = useState({
    day: "",
    username: "",
    email: "",
    number: "",
  });
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const { isLoading, doctors } = useFetchContext();
  const history = useHistory();

  useEffect(() => {
    const selectedDoc = doctors.find((doctor) => doctor.docId === parseInt(id));
    setDoctor(selectedDoc);
    // eslint-disable-next-line
  }, [doctors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ show: false });
    }, 4000);
    return () => clearTimeout(timer);
  }, [alert]);

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAlert({ show: true, msg: "Successfully registered!" });
    history.push("/doctors");
  };

  if (isLoading) {
    return <Loader />;
  }

  const { docName, docImage, docSpecialities, docQualifications, docSchedule } =
    doctor;
  return (
    <section className="p-4">
      <ScrollToTop />
      {alert.show && <Alert text={alert.msg} />}
      <div className="bg-gray-800 w-full max-w-5xl mx-auto overflow-hidden shadow rounded-lg">
        <Link
          to={`/doctor/${docName}`}
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
        <div className="px-4 md:px-8 pb-2 flex flex-col items-center">
          <div className="md:h-44 mb-4 md:w-44 h-32 w-32 rounded-lg overflow-hidden">
            <img
              className="h-full w-ful object-cover object-center"
              src={docImage}
              alt={docName}
            />
          </div>
          <div className="flex sm:flex-row text-center flex-col justify-between items-start">
            <div>
              <h3 className="mt-2 text-xl md:text-3xl leading-6 font-medium text-gray-100">
                {docName}
              </h3>
              <p className="mt-1 max-w-2xl text-md uppercase font-bold text-gray-300">
                {docQualifications}
              </p>
              <p className="mt-1 max-w-2xl text-xs uppercase font-bold text-gray-400">
                {Array.isArray(docSpecialities)
                  ? docSpecialities.join(", ")
                  : docSpecialities}
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-gray-800 py-8 px-4 shadow rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="day"
                  className="block text-sm font-medium text-gray-300"
                >
                  Select a day
                </label>
                <div className="mt-1">
                  <select
                    id="day"
                    name="day"
                    value={formValues.day}
                    onChange={handleFormValueChange}
                    required
                    className="appearance-none bg-gray-800 text-gray-300 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  >
                    {docSchedule?.map((schedule, index) => {
                      return <option key={index}>{schedule.day}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g: John Doe"
                    value={formValues.username}
                    onChange={handleFormValueChange}
                    required
                    className="appearance-none bg-gray-800 text-gray-200 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="mail@example.com"
                    value={formValues.email}
                    onChange={handleFormValueChange}
                    required
                    className="appearance-none text-gray-200 bg-gray-800 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-300"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    id="number"
                    name="number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="01XXXXXXXXX"
                    value={formValues.number}
                    onChange={handleFormValueChange}
                    required
                    className="appearance-none text-gray-200 bg-gray-800 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200"
                >
                  Book appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppoinment;
