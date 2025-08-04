import SectionTitle from "../components/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaCode, FaPalette } from "react-icons/fa";

export default function Contacto() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "jorgocios@gmail.com",
      href: "mailto:jorgocios@gmail.com",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50 hover:bg-red-100",
      description: "Respuesta en 24 horas"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Jxrgx",
      href: "https://github.com/Jxrgx",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50 hover:bg-gray-100",
      description: "Proyectos y código"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Jorge Julio Castro Alpuche",
      href: "https://www.linkedin.com/in/jorge-julio-castro-alpuche-b78744290",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      description: "Perfil profesional"
    }
  ];

  const skills = [
    { icon: FaCode, text: "Desarrollo Full Stack" },
    { icon: FaPalette, text: "UI/UX Design" },
    { icon: FaMapMarkerAlt, text: "Campeche, México" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative px-8 py-20 max-w-4xl mx-auto text-center">
          <SectionTitle className="text-white mb-6">
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              ¡Contactame!
            </span>
          </SectionTitle>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Puedes contactarme a través de los siguientes medios. Estoy abierto a oportunidades de colaboración, proyectos o simplemente conversar sobre desarrollo y diseño.
          </p>
          
          {/* Quick skills showcase */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <skill.icon className="text-white/90 text-sm" />
                <span className="text-white/90 text-sm font-medium">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="px-8 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group relative block p-8 rounded-2xl ${method.bgColor} border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {method.label}
              </h3>
              <p className="text-gray-600 mb-3 break-all group-hover:text-gray-700 transition-colors">
                {method.value}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                {method.description}
              </p>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Arrow indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Professional Quote Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Quote icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-8">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <blockquote className="relative z-10">
              <p className="text-2xl font-medium text-gray-800 mb-6 leading-relaxed italic">
                "Mi objetivo es seguir creciendo como desarrollador, combinando creatividad y funcionalidad para construir soluciones efectivas."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
            </blockquote>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Disponible para proyectos</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="text-sm text-gray-500">
              Tiempo de respuesta: 24-48 horas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}