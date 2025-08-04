import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="p-8 max-w-6xl mx-auto text-slate-800 relative">
        {/* HERO */}
        <section className="text-center mb-32 pt-16">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent tracking-tight mb-6">
              Jorge Castro
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
          </div>
          
          <div className="relative">
            <p className="text-xl text-slate-600 mt-4 font-medium">Estudiante de Ingeniería en Software</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="mt-10 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 font-medium italic">
              "Transformo ideas en interfaces funcionales y atractivas"
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Link
              to="/proyectos"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Ver proyectos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              to="/contacto"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold text-sm hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </Link>
          </div>
        </section>

        {/* PROYECTOS DESTACADOS */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Proyecto RH */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                  <img
                    src="/proyectos/SISTEMARH.png"
                    alt="Proyecto RH WebApp"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-slate-900">Proyecto RH - WebApp</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Sistema de gestión de recursos humanos con autenticación y panel administrativo.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Firebase", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href="https://sistemahh.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors group/link"
                >
                  Ver proyecto
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Proyecto Perfumería */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                  <img
                    src="/proyectos/MARKETPAL.png"
                    alt="MarketPal"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-slate-900">MarketPal</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Sistema POS completo con gestión de inventario, ventas y reportes en tiempo real                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["C#", ".NET","Firebase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href="https://github.com/MikeGPQ/MarketPal-1.2.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-600 transition-colors group/link"
                >
                  Ver proyecto
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/proyectos" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full text-slate-700 font-semibold hover:bg-white/80 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver todos los proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tecnologías</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              { name: "React", color: "from-blue-500 to-blue-600" },
              { name: "Tailwind", color: "from-cyan-500 to-blue-500" },
              { name: "Firebase", color: "from-orange-500 to-red-500" },
              { name: "GitHub", color: "from-gray-700 to-gray-900" },
              { name: "Netlify", color: "from-teal-500 to-cyan-500" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity`}></div>
                <span className="relative block bg-white px-6 py-3 rounded-2xl text-slate-700 font-semibold border border-gray-200 hover:border-transparent hover:text-white hover:bg-transparent transition-all duration-300 transform hover:scale-105 shadow-md">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FRASE */}
        <section className="text-center py-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg">
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-xl text-slate-700 font-medium italic leading-relaxed">
                El diseño no es solo cómo se ve, sino cómo funciona.
              </p>
              <p className="text-blue-600 font-semibold mt-4">— Steve Jobs</p>
              <div className="text-6xl text-blue-200 mt-4 rotate-180">"</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}