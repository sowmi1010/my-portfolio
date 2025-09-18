import experienceData from "../data/experience.json";
import { Code, Database, GraduationCap, Users, Download } from "lucide-react";

export default function Experience() {
  const iconMap = {
    Users,
    GraduationCap,
    Code,
    Database,
  };

  function highlightKeywords(text) {
    const keywords = [
      "MERN stack",
      "Java",
      "Python",
      "Flask",
      "SQL",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "C++",
      "C",
      "React.js",
      "Tailwind CSS",
      "Phoenix Framework",
      "LiveView",
      "production data",
    ];
    const pattern = keywords
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    const parts = text.split(new RegExp(`(${pattern})`, "gi"));

    return parts.map((part, idx) =>
      keywords.includes(part) ? (
        <span key={idx} className="font-bold text-purple-700 dark:text-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <section
      id="experience"
      className="
        py-16 px-4
        bg-gradient-to-br from-purple-50 to-purple-100
        dark:from-gray-900 dark:to-gray-800
        relative
      "
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="
            text-3xl sm:text-4xl font-extrabold
            text-purple-800 dark:text-yellow-300 mb-12
            text-center tracking-tight
          "
          data-aos="fade-down"
        >
          Experience
        </h2>

        <div className="relative">
          {/* timeline vertical line */}
          <div className="
            hidden sm:block
            absolute left-5 top-0 bottom-0 w-1
            bg-gradient-to-b from-yellow-400 via-pink-400 to-purple-500
            rounded-full animate-pulse
          "></div>

          <div className="space-y-10">
            {experienceData.map((exp, idx) => {
              const IconComponent = iconMap[exp.icon] || Users;

              return (
                <div
                  key={idx}
                  className="relative pl-14 sm:pl-16 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  {/* timeline circle icon */}
                  <div className="
                    absolute left-2 sm:left-0 top-2
                    w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600
                    rounded-full border-4 border-white
                    flex items-center justify-center
                    shadow-md group-hover:scale-110 transition
                  ">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>

                  {/* timeline card */}
                  <div className="
                    bg-gradient-to-br from-white to-purple-50
                    dark:from-gray-800 dark:to-gray-700
                    rounded-xl shadow-lg p-4 sm:p-6
                    border border-purple-200 dark:border-gray-600
                    hover:shadow-2xl hover:scale-[1.02]
                    transition transform duration-300
                  ">
                    <h3 className="
                      text-lg sm:text-xl font-semibold
                      text-purple-800 dark:text-yellow-200 mb-1
                    ">
                      {exp.title}
                    </h3>
                    <p className="
                      text-xs sm:text-sm text-gray-600
                      dark:text-gray-300 italic mb-3
                    ">
                      {exp.company} | {exp.time}
                    </p>
                    <ul className="
                      list-disc list-inside
                      text-xs sm:text-sm
                      text-gray-700 dark:text-yellow-100
                      space-y-1
                    ">
                      {exp.points.map((point, i) => (
                        <li key={i}>{highlightKeywords(point)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* resume button */}
        <div className="flex justify-center mt-12" data-aos="fade-up">
          <a
            href="/resume.pdf"
            download
            className="
              inline-flex items-center gap-2
              bg-gradient-to-br from-purple-700 to-pink-600
              text-yellow-300 px-5 py-3 rounded-full font-bold
              hover:bg-purple-800 hover:scale-105 transition shadow
            "
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>

      {/* decorative blobs */}
      <div className="
        absolute top-0 left-0
        w-40 sm:w-60 h-40 sm:h-60
        bg-yellow-300 opacity-20 rounded-full
        blur-3xl animate-pulse
      "></div>
      <div className="
        absolute bottom-0 right-0
        w-56 sm:w-80 h-56 sm:h-80
        bg-pink-400 opacity-20 rounded-full
        blur-3xl animate-pulse delay-1000
      "></div>
    </section>
  );
}
