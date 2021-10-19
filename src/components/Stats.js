import React from "react";

const Stats = () => {
  return (
    <div className="bg-gray-900 lg:pt-8 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Wellbe in numbers
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Learn more about Bangladesh’s fastest growing healthcare business.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-6 bg-gray-800">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-gray-800 shadow-2xl sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Doctors
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-400">
                    50+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Corporate Clients
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-400">
                    330
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Satisfied Patients
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-400">
                    500k+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
