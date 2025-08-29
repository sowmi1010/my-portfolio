import { useState } from "react";
import projects from "../data/projects.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { X } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="
        py-16 px-4
        bg-gradient-to-br from-purple-50 to-purple-100
        dark:from-gray-900 dark:to-gray-800
        relative"
    >
      <h2
        className="
          text-3xl sm:text-4xl font-extrabold text-purple-800
          dark:text-yellow-300 mb-12 text-center tracking-tight
        "
        data-aos="fade-down"
      >
        My Projects
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative bg-white dark:bg-gray-800 rounded-xl shadow-lg
                border border-purple-200 dark:border-gray-600 overflow-hidden
                group hover:shadow-2xl transition cursor-pointer
              "
              data-aos="zoom-in-up"
              onClick={() => setSelectedProject(proj)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="
                  w-full h-48 sm:h-56 md:h-60 object-cover
                  group-hover:scale-105 transition duration-500
                "
              />
              <div className="p-4">
                <h3
                  className="
                  text-lg sm:text-xl font-semibold
                  text-purple-800 dark:text-yellow-200 mb-1
                  group-hover:text-pink-600 transition
                "
                >
                  {proj.title}
                </h3>
                <p
                  className="
                  text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2
                  line-clamp-3
                "
                >
                  {proj.desc}
                </p>
                <p
                  className="
                  text-xs text-purple-700 dark:text-yellow-300
                  font-semibold mb-2
                "
                >
                  {proj.tech}
                </p>
              </div>
              {/* hover overlay */}
              <div
                className="
                absolute inset-0 bg-purple-800 bg-opacity-70
                dark:bg-gray-900/80 opacity-0 group-hover:opacity-100
                text-white flex items-center justify-center text-center
                p-4 transition
              "
              >
                <span className="text-xs sm:text-sm">
                  Click to view details
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* modal */}
      {selectedProject && (
        <div
          className="
          fixed inset-0 bg-black bg-opacity-60
          flex justify-center items-center z-50 p-4
        "
        >
          <div
            className="
            bg-white dark:bg-gray-800 rounded-xl shadow-xl
            p-4 sm:p-6 relative max-w-lg w-full animate-fadeIn
          "
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="
                absolute top-2 right-2 sm:top-3 sm:right-3
                text-purple-700 dark:text-yellow-300 hover:text-purple-900
              "
            >
              <X size={20} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="
                rounded mb-3 sm:mb-4 w-full object-cover
                max-h-60 sm:max-h-72
              "
            />
            <h3
              className="
              text-xl sm:text-2xl font-bold
              text-purple-800 dark:text-yellow-200 mb-2
            "
            >
              {selectedProject.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
              {selectedProject.desc}
            </p>
            <p
              className="
              text-xs text-purple-700 dark:text-yellow-300
              font-semibold mb-4
            "
            >
              {selectedProject.tech}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-purple-700 text-yellow-300 px-4 py-2 rounded-full
                font-bold hover:bg-purple-800 transition inline-block
              "
            >
              View Code
            </a>
          </div>
        </div>
      )}

      {/* decorative blobs */}
      <div
        className="
        absolute top-0 left-0 w-36 sm:w-48 h-36 sm:h-48
        bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse
      "
      ></div>
      <div
        className="
        absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72
        bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse
        delay-1000
      "
      ></div>
    </section>
  );
}
