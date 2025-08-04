import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jorgocios@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-500",
      label: "Email"
    },
    {
      href: "https://github.com/Jxrgx",
      icon: FaGithub,
      color: "hover:text-gray-800",
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/jorge-julio-castro-alpuche-b78744290",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { to: "/", label: "Inicio" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/devlogs", label: "Devlogs" },
    { to: "/contacto", label: "Contacto" }
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
      </div>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-white"
          />
        </svg>
      </div>

      <div className="relative px-8 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jorge Castro</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Desarrollador apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-xs" />
                <span>Campeche, México</span>
              </div>
            </div>

            {/* Quick links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-6 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.to}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-6 text-white">Conecta Conmigo</h4>
              <div className="flex justify-center md:justify-end gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.label}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                ¿Tienes un proyecto en mente?
              </p>
              <a
                href="mailto:jorgocios@gmail.com"
                className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                ¡Hablemos!
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Jorge Castro</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Hecho con <FaHeart className="text-red-500 text-xs animate-pulse" /> y mucho café
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Disponible para proyectos
                </span>
                <span>React • Next.js • Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}