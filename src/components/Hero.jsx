import { useMemo } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import profileImage from "../assets/profile.webp";
import resumePdf from "../assets/resume.pdf";
import MagneticBtn from "./interactive/MagneticBtn";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sowmiya-thangadurai-206163233",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/sowmi1010",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:tamilsowmi1010@gmail.com",
    icon: Mail,
  },
];

const proofPoints = [
  "Admin dashboards",
  "Business websites",
  "Scalable web apps",
];

export default function Hero() {
  const whatsappLink =
    "https://wa.me/917305312767?text=Hi%20Sowmiya%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.";

  const stars = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 1.5,
        duration: 5 + Math.random() * 3,
      })),
    []
  );

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#06000d] px-5 pb-16 pt-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#3f0f63_0%,#140022_45%,#06000d_100%)] opacity-80" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            opacity: 0.35,
          }}
          animate={{ opacity: [0.2, 0.6, 0.2], y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: star.duration, delay: star.delay }}
        />
      ))}

      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute bottom-0 left-0 h-[34vh] w-full bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[length:100%_26px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center lg:gap-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-yellow-300/60 bg-yellow-300/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200"
        >
          Available for full-stack MERN roles
        </motion.span>

        <motion.img
          src={profileImage}
          alt="Sowmiya Thangadurai"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="h-28 w-28 rounded-full border-4 border-yellow-400 object-cover shadow-[0_0_16px_rgba(255,221,0,0.35)] sm:h-36 sm:w-36"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-purple-200 via-white to-yellow-200 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl"
        >
          Sowmiya Thangadurai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-base leading-relaxed text-gray-200 md:text-xl"
        >
          Full Stack MERN Developer focused on building admin dashboards, business
          websites, and scalable web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base"
        >
          Seeking MERN and full-stack developer opportunities where I can ship
          production-ready features end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-gray-100"
            >
              {point}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticBtn
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-bold text-purple-950 shadow-[0_0_25px_rgba(255,221,0,0.45)] transition hover:bg-yellow-300"
          >
            View Projects
          </MagneticBtn>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white transition hover:border-yellow-300 hover:text-yellow-200"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full border border-yellow-300/50 px-6 py-2 text-sm font-semibold text-yellow-200 transition hover:bg-yellow-300/15"
          >
            Contact Me
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-green-300/50 px-6 py-2 text-sm font-semibold text-green-200 transition hover:bg-green-300/15"
          >
            WhatsApp Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-1 flex gap-4"
        >
          {socialLinks.map((social) => {
            const SocialIcon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="rounded-full border border-white/20 bg-white/10 p-3 text-yellow-200 transition hover:border-yellow-300 hover:text-white"
              >
                <SocialIcon className="h-5 w-5" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
