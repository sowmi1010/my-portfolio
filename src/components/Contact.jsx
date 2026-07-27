import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { motion } from "framer-motion";
import MagneticBtn from "./interactive/MagneticBtn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mailHint, setMailHint] = useState("");

  const items = [
    {
      icon: <Mail className="h-5 w-5 text-yellow-300" />,
      text: "tamilsowmi1010@gmail.com",
      link: "mailto:tamilsowmi1010@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-yellow-300" />,
      text: "+91 73053 12767",
      link: "tel:7305312767",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-yellow-300" />,
      text: "linkedin.com/in/sowmiya-thangadurai-206163233",
      link: "https://www.linkedin.com/in/sowmiya-thangadurai-206163233",
    },
    {
      icon: <Github className="h-5 w-5 text-yellow-300" />,
      text: "github.com/sowmi1010",
      link: "https://github.com/sowmi1010",
    },
    {
      icon: <MapPin className="h-5 w-5 text-yellow-300" />,
      text: "Avadi, Tamil Nadu - 600054",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:tamilsowmi1010@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailHint("Opening your email app with a prefilled draft message.");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#080012] via-[#0c0014] to-black px-6 py-28 text-white dark:from-black dark:via-[#05000c] dark:to-black"
    >
      <motion.div
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-[-10%] top-[15%] h-[340px] w-[340px] rounded-full bg-purple-600/20 blur-[120px] dark:bg-yellow-300/12"
      />

      <hr className="mx-auto mb-12 max-w-6xl border-white/10" />

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mb-4 bg-gradient-to-r from-yellow-300 via-white to-yellow-400 bg-clip-text text-center text-5xl font-extrabold text-transparent"
      >
        Let&apos;s Build Something Useful
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-gray-300 md:text-base"
      >
        Open to MERN developer roles, freelance projects, and collaboration opportunities.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4 text-sm">
          {items.map((item, index) => (
            <motion.div
              key={`${item.text}-${index}`}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition-all hover:border-yellow-300/40 hover:shadow-[0_0_12px_rgba(255,255,0,0.15)]"
            >
              {item.icon}
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="break-all transition hover:text-yellow-300"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
        >
          <h3 className="text-xl font-bold text-yellow-200">Send a Message</h3>
          <p className="mt-2 text-sm text-gray-300">
            Share your requirement and I&apos;ll get back within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-300"
                placeholder="Tell me about your project or role"
              />
            </div>

            <MagneticBtn
              type="submit"
              className="inline-flex rounded-full bg-yellow-400 px-8 py-2.5 text-sm font-bold text-purple-900 shadow-xl transition-all hover:bg-yellow-300"
            >
              Send Message
            </MagneticBtn>
          </form>

          <p className="mt-3 text-xs text-gray-400">This form opens your default email app with a prefilled message.</p>
          {mailHint && (
            <p aria-live="polite" className="mt-1 text-xs text-green-300">
              {mailHint}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
