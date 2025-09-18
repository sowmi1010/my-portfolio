import { Typewriter } from "react-simple-typewriter";
import { Linkedin, Github, Mail } from "lucide-react";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen flex flex-col justify-center items-center text-center
        bg-gradient-to-br from-purple-800 via-fuchsia-800 to-indigo-900
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        text-white dark:text-yellow-100
        relative overflow-hidden
        transition-colors duration-500
      "
    >
      <div className="p-4 sm:p-6 max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-yellow-300 mb-2">
          Passionate Web Creator
        </p>

        {/* 👇 direct reference to public/profile.jpg */}
        <img
          src={profileImage}
          alt="Sowmiya"
          className="
            w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4
            border-4 border-yellow-400 rounded-full shadow-xl
            hover:scale-110 transition-transform duration-300
          "
          loading="lazy"
          decoding="async"
        />

        <h2
          className="
            text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 tracking-tight
            bg-gradient-to-r from-yellow-300 via-white to-yellow-400
            bg-clip-text text-transparent animate-pulse
          "
        >
          Sowmiya Thangadurai
        </h2>

        <span className="text-lg sm:text-xl font-medium mb-4 block">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "UI Designer",
              "React Expert",
              "Coding Trainer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>

        <p className="text-purple-100 dark:text-yellow-200 text-sm sm:text-base mb-4 max-w-md mx-auto">
          I design and build modern, responsive, high-performance web apps using
          the MERN Stack.
        </p>

        <a
          href="#contact"
          className="
            inline-block bg-yellow-400 text-purple-900 px-4 sm:px-6 py-2 sm:py-3
            rounded-full font-bold hover:bg-yellow-300 hover:scale-105
            transition duration-300 shadow
          "
        >
          Hire Me
        </a>

        {/* social icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/sowmiya-thangadurai-206163233"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 hover:text-yellow-400 transition" />
          </a>
          <a
            href="https://github.com/sowmi1010"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 hover:text-yellow-400 transition" />
          </a>
          <a href="mailto:tamilsowmi1010@gmail.com">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 hover:text-yellow-400 transition" />
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 animate-bounce text-yellow-300 font-semibold text-xs sm:text-base z-10 drop-shadow-lg">
        ↓ scroll
      </div>
    </section>
  );
}
