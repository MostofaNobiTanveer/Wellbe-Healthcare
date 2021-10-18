import React from "react";

const Brands = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl text-center">
          Our Corporate Clients
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-center">
          We provide the best healthcare to the best of Bangladesh
        </p>
        <div className="mt-10 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:mt-8">
          <div className="shadow-lg col-span-1 flex justify-center py-8 px-8 rounded bg-gray-800">
            <img
              className="max-h-16 lg:max-h-24"
              src="https://i.ibb.co/dKkCryk/output-onlinepngtools-1.png"
              alt="Unilever"
            />
          </div>
          <div className="shadow-lg col-span-1 flex justify-center py-8 px-8 rounded bg-gray-800">
            <img
              className="max-h-16 lg:max-h-24"
              src="https://i.ibb.co/3SbYGwd/output-onlinepngtools-4.png"
              alt="Cocacola"
            />
          </div>
          <div className="shadow-lg col-span-1 flex justify-center py-8 px-8 rounded bg-gray-800">
            <img
              className="max-h-16 lg:max-h-24"
              src="https://i.ibb.co/zZmcYks/output-onlinepngtools-1.png"
              alt="Gp"
            />
          </div>
          <div className="shadow-lg col-span-1 flex justify-center py-8 px-8 rounded bg-gray-800">
            <img
              className="max-h-16 lg:max-h-24"
              src="https://i.ibb.co/qp5ycpF/output-onlinepngtools-5.png"
              alt="Samsung"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
