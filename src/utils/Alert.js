import React from "react";

const Alert = ({ text }) => {
  return (
    <div className="rounded-md shadow-2xl z-50 w-full max-w-sm bg-gray-700 p-4 fixed bottom-4 left-4">
        <div className="ml-3">
          <p className="text-base font-medium text-white">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
