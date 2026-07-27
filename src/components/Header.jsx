import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle";
import resumePdf from "../assets/resume.pdf";

const primaryNavItems = [
  { label: "Home", href: "#hero" },
  { label: "Resume", href: resumePdf, external: true },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const secondaryNavItems = ["About", "Skills", "Experience"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-[999] w-full">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`pointer-events-auto border-b backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a
            href="#hero"
            className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-[28px] font-black tracking-tight text-transparent dark:from-yellow-300 dark:to-yellow-500"
          >
            Sowmiya
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-7 text-base font-medium text-white dark:text-yellow-200">
              {primaryNavItems.map((item) => (
                <motion.li whileHover={{ scale: 1.04 }} key={item.label} className="group relative">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="pb-[2px]"
                  >
                    {item.label}
                  </a>
                  <span className="absolute -bottom-[3px] left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full dark:from-yellow-300 dark:to-yellow-500" />
                </motion.li>
              ))}
            </ul>
            <DarkModeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="pointer-events-auto text-white dark:text-yellow-200 md:hidden"
            aria-label="Open menu"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 58 }}
            className="pointer-events-auto fixed right-0 top-0 flex h-screen w-[72%] flex-col gap-6 border-l border-white/10 bg-black/85 p-8 text-white backdrop-blur-2xl dark:text-yellow-200"
          >
            <button
              type="button"
              className="self-end"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-9 w-9" />
            </button>

            <div className="flex flex-col gap-5 text-lg">
              {primaryNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-yellow-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-yellow-300/60 bg-yellow-300/10 px-4 py-2 text-center text-sm font-semibold text-yellow-200"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-center text-sm font-semibold text-cyan-200"
              >
                Contact Me
              </a>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-gray-400">More</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {secondaryNavItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="transition hover:text-yellow-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
