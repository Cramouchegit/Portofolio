import React from "react";

const skills = [
  "git",
  "github",
  "javascript",
  "html",
  "css",
  "bootstrap",
  "tailwind",
  "react",
  "ts",
  "nextjs",
  "nodejs",
  "express",
  "mysql",
  "postgresql",
];

const IconSkills = () => {
  return (
    <section id="skills" className="mt-16">
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-8 leading-tight tracking-tighter">
        My Skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center text-center mt-16 py-5 px-10 sm:px-24 md:px-40 lg:px-52 xl:px-72 2xl:px-96">
        {skills.map((skill) => (
          <div key={skill} className="glassmorphism p-4">
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={`${skill} icon`}
              className="w-12 h-12 md:w-[5rem] md:h-[5rem] mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconSkills;
