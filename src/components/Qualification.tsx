import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h2 className="text-white text-4xl font-bold text-center mb-2">
        Qualification
      </h2>
      <span className="block text-lg text-center text-gray-500 mb-10">
        My personal journey
      </span>

      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-12 mb-14">
        <div
          className={`flex items-center cursor-pointer ${
            toggleState === 1
              ? "text-indigo-600 font-semibold"
              : "text-gray-200"
          }`}
          onClick={() => toggleTab(1)}
        >
          <span className="mr-2 text-2xl">🎓</span> Education
        </div>
        <div
          className={`flex items-center cursor-pointer ${
            toggleState === 2
              ? "text-indigo-600 font-semibold"
              : "text-gray-200"
          }`}
          onClick={() => toggleTab(2)}
        >
          <span className="mr-2 text-2xl">💼</span> Experience
        </div>
      </div>

      {/* Content Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 px-4 md:px-8 lg:px-16">
        {/* Central Divider */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Education Section */}
        {toggleState === 1 && (
          <>
            {/* Left-Right Layout */}
            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">
                  SMK AL-AQsyar Islamic School
                </h3>
                <p className="text-gray-100">
                  {" "}
                  Bogor - Senior & Junior High School (Teknik Komputer &
                  Jaringan)
                </p>
                <span className="text-gray-200 text-sm">2021 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">DiCoding</h3>
                <p className="text-gray-100">Yogyakarta - Online Courses</p>
                <span className="text-gray-200 text-sm">2023 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">ID - Networkers</h3>
                <p className="text-gray-100">Jakarta - Online Course</p>
                <span className="text-gray-200 text-sm">2023 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">CODEPOLITAN</h3>
                <p className="text-gray-100">Bandung - Online Courses</p>
                <span className="text-gray-200 text-sm">2023 - Present</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>
          </>
        )}

        {/* Experience Section */}
        {toggleState === 2 && (
          <>
            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">
                  PT. Kredit Pintar Indonesia
                </h3>
                <p className="text-gray-100">
                  SCBD - Magang (Junior Web Developer)
                </p>
                <span className="text-gray-200 text-sm">2023 - 2023</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">Freelancer</h3>
                <p className="text-gray-100">Bogor - Web Developer</p>
                <span className="text-gray-200 text-sm">2024 - Present</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Qualification;
