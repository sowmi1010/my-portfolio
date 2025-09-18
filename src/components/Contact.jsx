import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-16
        bg-gradient-to-br from-purple-900 to-purple-950
        dark:from-gray-900 dark:to-black
        text-white
        relative overflow-hidden
      "
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold
            text-center mb-8 tracking-tight
            text-white dark:text-yellow-300
          "
        >
          Let’s Connect
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* contact details */}
          <div className="flex flex-col justify-center gap-4 text-sm sm:text-base">
            {[
              {
                icon: <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300" />,
                text: "tamilsowmi1010@gmail.com",
                link: "mailto:tamilsowmi1010@gmail.com",
              },
              {
                icon: <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300" />,
                text: "7305312767",
              },
              {
                icon: <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300" />,
                text: "sowmiya-thangadurai",
                link: "https://www.linkedin.com/in/sowmiya-thangadurai-206163233",
              },
              {
                icon: <Github className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300" />,
                text: "sowmi1010",
                link: "https://github.com/sowmi1010",
              },
              {
                icon: <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300" />,
                text: "Avadi, Chennai - 600005",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-3
                  p-3 sm:p-4
                  bg-purple-800/40 dark:bg-gray-800/40
                  rounded-xl shadow
                  hover:bg-purple-800/60 dark:hover:bg-gray-800/60
                  transition
                "
              >
                {item.icon}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-300 transition break-all"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* contact pitch */}
          <div className="flex flex-col justify-center text-center md:text-left gap-4">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-yellow-200">
              I’d love to hear from you!
            </h3>
            <p className="text-purple-200 dark:text-purple-300 text-sm sm:text-base">
              Feel free to reach out for collaboration, project inquiries, or just to say hello.
              Let’s build something great together.
            </p>
            <a
              href="mailto:tamilsowmi1010@gmail.com"
              className="
                inline-block mt-4 px-5 py-3
                bg-yellow-400 text-purple-900 font-semibold
                rounded-full hover:bg-yellow-300 transition
              "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* responsive decorative blobs */}
      <div className="
        absolute top-0 left-0
        w-48 sm:w-64 h-48 sm:h-64
        bg-yellow-400 opacity-20
        rounded-full blur-3xl animate-pulse
      "></div>
      <div className="
        absolute bottom-0 right-0
        w-64 sm:w-80 h-64 sm:h-80
        bg-pink-400 opacity-20
        rounded-full blur-3xl animate-pulse delay-1000
      "></div>
    </section>
  );
}
