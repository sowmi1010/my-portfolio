// src/components/Skills.jsx
import skills from "../data/skills.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16 px-4
        bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900
        dark:from-gray-900 dark:via-gray-800 dark:to-black
      "
    >
      <h2
        className="
          text-3xl sm:text-4xl font-extrabold text-center text-yellow-300
          mb-12 tracking-wide
        "
        data-aos="fade-up"
      >
        My Skills
      </h2>
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-8 max-w-6xl mx-auto
        "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              flip-card w-full h-60 sm:h-64 md:h-72 shadow-xl rounded-xl
              cursor-pointer
            "
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div
                className="
                  flip-card-front
                  p-4 flex flex-col items-center justify-center
                  dark:bg-gray-800 dark:text-yellow-100 rounded-xl
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 sm:w-24 md:w-28 h-auto mb-4"
                />
                <span className="text-lg sm:text-xl font-bold">{skill.name}</span>
              </div>
              {/* BACK */}
              <div
                className="
                  flip-card-back
                  p-4 flex items-center justify-center text-center
                  dark:from-gray-700 dark:to-gray-800
                  text-purple-900 dark:text-yellow-100 rounded-xl
                "
              >
                <p className="text-sm sm:text-base font-semibold">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
