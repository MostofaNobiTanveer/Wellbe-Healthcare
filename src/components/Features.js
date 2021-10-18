import React from "react";

const features = [
  {
    id: 1,
    pathData: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
    title: "Health Security",
    desc: "You can get the care you need 24/7 – be it online or in clinic. And you can manage your health via our app: book appointments, access your test results, and more.",
  },
  {
    id: 2,
    pathData: ["M22 12h-4l-3 9L9 3l-3 9H2"],
    title: "Diagnostics",
    desc: "Our lab participates in the world’s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best in Bangladesh.",
  },
  {
    id: 3,
    pathData: [
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    ],
    title: "Specialist Doctors",
    desc: "At Wellbe you will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.",
  },
  {
    id: 4,
    pathData: ["M22 11.08V12a10 10 0 11-5.93-9.14", "M22 4L12 14.01l-3-3"],
    title: "Ultimate Satisfactory",
    desc: "At Wellbe, we have built a healthcare system where you come first. Because nothing is more important than your and your family’s health.",
  },
];

const Features = () => {
  return (
    <section class="text-gray-400 bg-gray-900">
      <div class="max-w-6xl pt-12 px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-center title-font text-white mb-4">
            Our Features
          </h1>
        </div>
        <div class="md:pr-10 md:py-6 grid gap-4 lg:grid-cols-2">
          {features.map(({ id, pathData, title, desc }) => {
            return (
              <div key={id} class="flex pb-12">
                <div class="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d={pathData}></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-semibold text-lg text-white mb-1 tracking-wider">
                    {title}
                  </h2>
                  <p class="leading-relaxed text-sm ">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;