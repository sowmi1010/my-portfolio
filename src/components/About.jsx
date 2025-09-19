import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden flex flex-col lg:flex-row items-center justify-center
        gap-8 md:gap-12 lg:gap-16 px-4 py-12
        md:min-h-screen
        bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black
        transition-colors duration-500
      "
    >
      {/* animated blobs */}
      <div className="absolute top-0 left-0 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-purple-400 opacity-20 rounded-full blur-3xl animate-[swirl_12s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-[swirl_15s_ease-in-out_infinite] delay-1000"></div>

      {/* left side image */}
      <div className="z-10">
        <img
          src={profileImage}
          alt="Sowmiya"
          className="
            w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80
            h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80
            object-fill rounded-2xl shadow-2xl
            border-4 border-purple-500
            hover:scale-105 transition duration-500
          "
        />
      </div>

      {/* right side text */}
      <div
        className="
          z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left
          text-purple-900 dark:text-yellow-100
          max-w-xl
        "
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          About Me
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4 px-2 lg:px-0">
          <span className="font-bold text-yellow-600">Creating</span> impactful
          user interfaces with
          <span className="font-bold text-pink-600"> pixel-perfect</span>{" "}
          detail, while
          <span className="font-bold text-yellow-600"> empowering</span>{" "}
          students to grow.
        </p>
        <div className="text-lg sm:text-xl text-yellow-600 font-semibold mb-4">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Specialist",
              "UI Designer",
              "Coding Mentor",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>
        <p className="text-sm sm:text-base mb-4 px-2 lg:px-0">
          <span className="font-semibold text-yellow-600">Education:</span> Diploma in Computer Science, <br />
          Dharmambal Womens Polytechnic College, Chennai
        </p>
        <a
          href="#skills"
          className="
            inline-block bg-yellow-400 text-purple-900
            px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold
            hover:bg-yellow-300 transition shadow
          "
        >
          View My Skills
        </a>
      </div>
    </section>
  );
}
