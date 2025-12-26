// src/components/Contact.jsx
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { motion } from "framer-motion";
import MagneticBtn from "./interactive/MagneticBtn";

export default function Contact() {
  const items = [
    {
      icon: <Mail className="w-5 h-5 text-yellow-300" />,
      text: "tamilsowmi1010@gmail.com",
      link: "mailto:tamilsowmi1010@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-yellow-300" />,
      text: "7305312767",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-yellow-300" />,
      text: "linkedin.com/in/sowmiya-thangadurai",
      link: "https://www.linkedin.com/in/sowmiya-thangadurai-206163233",
    },
    {
      icon: <Github className="w-5 h-5 text-yellow-300" />,
      text: "github.com/sowmi1010",
      link: "https://github.com/sowmi1010",
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-300" />,
      text: "Avadi, Chennai - 600005",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative py-28 px-6 overflow-hidden 
        bg-gradient-to-b from-[#080012] via-[#0c0014] to-[#000000] text-white
        dark:bg-gradient-to-b dark:from-[#000000] dark:via-[#05000c] dark:to-black
      "
    >
      {/* ✨ Circle Pulse BG Animation */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity }}
          className="absolute rounded-full blur-[150px] bg-purple-600/25 dark:bg-yellow-300/15"
          style={{
            width: 300 + i * 180,
            height: 300 + i * 180,
            top: i * 80,
            right: i % 2 === 0 ? "-10%" : "auto",
            left: i % 2 !== 0 ? "-15%" : "auto",
          }}
        />
      ))}

      {/* Divider */}
      <hr className="border-white/10 mb-12 max-w-6xl mx-auto" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          text-center text-5xl font-extrabold mb-14
          bg-gradient-to-r from-yellow-300 via-white to-yellow-400
          bg-clip-text text-transparent
        "
      >
        Let’s Connect
      </motion.h2>

      {/* Layout */}
      <div className="relative z-10 max-w-5xl mx-auto grid gap-10 md:grid-cols-2">

        {/* Contact Card List */}
        <div className="flex flex-col gap-4 text-sm">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="
                flex items-center gap-3 p-4 rounded-xl
                backdrop-blur-xl bg-white/5 border border-white/10
                hover:border-yellow-300/40 hover:shadow-[0_0_15px_rgba(255,255,0,0.2)]
                transition-all
              "
            >
              {item.icon}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center items-center md:items-start gap-4"
        >
          <h3 className="text-2xl font-bold text-yellow-200">
            I’d love to hear from you!
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Whether you want MERN development, UI/UX help, or you're a student wanting guidance — feel free to say hi 👋
          </p>

          {/* CTA */}
          <MagneticBtn className="
            mt-3 inline-block px-10 py-3 text-lg font-bold rounded-full
            bg-yellow-400 text-purple-900 hover:bg-yellow-300 shadow-xl
            transition-all
          ">
            <a href="mailto:tamilsowmi1010@gmail.com">Get in Touch</a>
          </MagneticBtn>
        </motion.div>
      </div>

      {/* Footer space */}
      <div className="h-6" />
    </section>
  );
}
