import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al redimensionar ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (to) => {
    // Scroll suave hacia arriba al navegar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Cerrar menú móvil al navegar
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/acerca", label: "Acerca de mí" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/devlogs", label: "Devlogs" },
    { to: "/contacto", label: "Contacto" }
  ];

  const socialLinks = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jorgocios@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-500",
      title: "Enviar correo desde Gmail"
    },
    {
      href: "https://github.com/Jxrgx",
      icon: FaGithub,
      color: "hover:text-gray-800",
      title: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/jorge-julio-castro-alpuche-b78744290",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
      title: "LinkedIn"
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-200 border-opacity-50 shadow-lg' 
          : 'bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 border-opacity-30'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <Link to="/" className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <FaCode className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Jorge Castro
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Developer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Nav Links */}
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => handleNavigation(link.to)}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 group ${
                        location.pathname === link.to
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                      
                      {/* Active indicator */}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform transition-all duration-200 ${
                        location.pathname === link.to 
                          ? 'scale-x-100' 
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg text-gray-600 ${social.color} transition-all duration-200 hover:bg-gray-100 hover:scale-110`}
                    title={social.title}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-700" />
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Subtle gradient line at bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 via-opacity-20 to-transparent" />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">Jorge Castro</h2>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => handleNavigation(link.to)}
                    className={`flex items-center px-6 py-4 text-lg font-medium transition-all duration-200 ${
                      location.pathname === link.to
                        ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Conecta Conmigo</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl text-gray-600 ${social.color} transition-all duration-200 hover:bg-gray-100 hover:scale-110 border border-gray-200`}
                  title={social.title}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}