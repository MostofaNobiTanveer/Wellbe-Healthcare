import React from "react";
import ScrollToTop from "../../utils/ScrollToTop";

const faq = [
  {
    question: "WHAT IS WELLBE?",
    answer:
      "Wellbe is a network of family health centers in Bangladesh that provide outstanding care with international quality doctors, diagnostics, and technology. We offer consultations, a full range of diagnostic services including laboratory and imaging as well as procedures and health plans.",
  },
  {
    question: "IS WELLBE A HOSPITAL?",
    answer:
      "Wellbe Health is not a hospital and does not have emergency services. Wellbe is a Family Health Center with outpatient facilities.",
  },
  {
    question: "WHY SHOULD I COME TO WELLBE?",
    answer:
      "At Wellbe we are building a different kind of care where you and your family come first. Over the last year we have received a rating of 4.65/5 on average from our patients. Our family doctors, specialists, and health professionals spend time getting to know you and your families. We use cutting edge technology and seamless processes so that you don’t have to wait when you come to Wellbe – and you can access healthcare even from home using our app. Our price point is also affordable.",
  },
  {
    question: "HOW IS WELLBE DIFFERENT FROM OTHER HEALTH SERVICE PROVIDERS?",
    answer:
      "Wellbe Health’s biggest differentiator with other healthcare providers is quality. Doctors will be your first point of entry into the health system and will know your entire medical record and be better equipped to help you manage your health. Our state of the art laboratory has been set up according to international standards and international protocols are followed and ensured. Wellbe has also launched Bangladesh’s first patient portal which means all of your medical records are stored on the app. You can also book appointments, upload your previous medical prescriptions, get your test results, etc. on your Wellbe patient app. We also have an in-house pharmacy where medicines are sourced directly from top manufacturers so you know you can trust the quality. ",
  },
  {
    question: "WHAT ARE THE SERVICES OFFERED BY WELLBE?",
    answer: [
      "Family Doctors",
      "Gynecologists",
      "Pediatricians",
      "Dentists",
      "Ophthalmologists",
      "Physiotherapists",
      "Nutritionists",
      "Health Coaches",
      "Counseling",
    ],
  },
  {
    question: "WHAT ARE YOUR OPERATING HOURS?",
    answer: "We are open everyday from 8 am – 10 pm.",
  },
  {
    question: "HOW DO YOU ENSURE SERVICE QUALITY?",
    answer:
      "We are focused on medical report accuracy with quality measures as per international standards. We follow strict clinical governance and standards. Our senior doctors also conduct clinical audits to monitor performance and patient outcomes and we use patient feedback to ensure our doctors are providing top-quality care. We also give hospitality training to all of our staff, including our doctors and patient-facing teams to ensure that they treat our patients with dignity and respect.",
  },
];

const FAQ = () => {
  return (
    <section className="flex-1 items-start">
      <ScrollToTop />
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((qna, index) => {
              return (
                <dl
                  key={index}
                  className="px-3 md:px-6 rounded-lg divide-y divide-gray-200 bg-gray-800"
                >
                  <div className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt className="text-base font-medium text-gray-200 md:col-span-5">
                      {qna.question}
                    </dt>
                    <dd className="mt-2 md:mt-0 md:col-span-7">
                      <div className="text-base text-gray-400">
                        {typeof qna.answer === "string"
                          ? qna.answer
                          : qna.answer.map((ans, i) => {
                              return (
                                <ul key={ans}>
                                  <li>
                                    {i + 1}. {ans}
                                  </li>
                                </ul>
                              );
                            })}
                      </div>
                    </dd>
                  </div>
                </dl>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
