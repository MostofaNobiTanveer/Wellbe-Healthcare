import React from "react";
import ScrollToTop from "../../utils/ScrollToTop";

const PrivacyPolicies = () => {
  return (
    <section className="flex-1 items-start">
      <ScrollToTop />
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Privacy Notice
          </h2>
          <div className="mt-8 space-y-3 text-gray-400">
            <p className="border-l-4 pl-4 text-gray-300 border-gray-700 ">
              The website provides information related to Welbe, its services,
              and health in general.
            </p>
            <p className="text-gray-400">
              The privacy notice applies to the website and the application,
              which are owned and operated by Wellbe. The privacy notice
              describes how Wellbe Health collects and uses personal information
              provided by those who visit the website and the application. It
              also describes the options available to users and visitors
              regarding Wellbe Health’s use of personal information.
            </p>
            <div className="pt-6 space-y-3">
              <h3 className="text-gray-100 font-semibold border-l-4 pl-4 border-gray-100">
                Wellbe Policy
              </h3>
              <p className="text-gray-400">
                We highly value your privacy and share your concerns regarding
                any information you provide to us when you visit us online. We
                recommend that you read this entire privacy notice as you choose
                to navigate through our website and patient portal.
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="text-gray-100 font-semibold border-l-4 pl-4 border-gray-100">
                Personal Information
              </h3>
              <p className="text-gray-400">
                “Personal Information” refers to information that allows us to
                identify you, which may include, without limitation, your full
                name, contact number, e-mail address, gender, date of birth, zip
                code, insurance data, medical data and other identifying
                information you voluntarily choose to provide to us (e.g.,
                passwords, emails, letters, etc.).
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="text-gray-100 font-semibold border-l-4 pl-4 border-gray-100">
                Cookies
              </h3>
              <p className="text-gray-400">
                Our website may use cookies to track information and usage
                behavior to better understand our user base. This helps us to
                deliver better information and services, improve the content and
                administration of our website, and generally enhance your online
                experience when visiting our website. Cookies also help us to
                diagnose problems with our server. We only use cookie technology
                to compile aggregated data about your visits to our website and
                not to obtain personal information.
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="text-gray-100 font-semibold border-l-4 pl-4 border-gray-100">
                Other Terms
              </h3>
              <p className="text-gray-400">
                Your use of our website is subject to and contingent upon your
                agreement with all other terms and conditions. Aside from as
                described in this notice, Wellbe Health will not use your
                information for any other purposes without your explicit
                authorization. If yo have any questions regarding this notice,
                please email us at{" "}
                <code className="text-purple-400">info@Wellbe.com</code> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicies;
