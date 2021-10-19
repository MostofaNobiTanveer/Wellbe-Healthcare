import React from "react";
import { Link } from "react-router-dom";

const DocCard = ({
  docId,
  docName,
  docImage,
  docSpecialities,
  docQualifications,
}) => {
  return (
    <li
      key={docId}
      className="py-8 px-6 bg-gray-800 text-center rounded-lg xl:px-10"
    >
      <div className="space-y-6 xl:space-y-10 h-full flex flex-col">
        <img
          className="mx-auto h-48 w-48 rounded-lg"
          src={docImage}
          alt={docName}
        />
        <div className="flex-1 space-y-2 flex flex-col justify-between">
          <div className="font-medium space-y">
            <h3 className="text-white text-lg leading-6">{docName}</h3>
            <p className="text-gray-300 font-medium text-base">
              {docQualifications}
            </p>
            <p className="text-purple-400 capitalize text-md">
              {Array.isArray(docSpecialities)
                ? docSpecialities.join(", ")
                : docSpecialities}
            </p>
          </div>

          <div className="flex-1 items-end flex justify-end">
            <Link
              to={`/doctor/${docName}`}
              className="mt-4 inline-flex items-center font-bold justify-center w-full py-2.5 border border-transparent text-sm rounded shadow-sm text-white bg-purple-500 hover:bg-purple-600 focus:outline-none"
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DocCard;
