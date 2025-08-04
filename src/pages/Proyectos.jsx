import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");

  const proyectos = [
    {
      titulo: "Proyecto RH - WebApp",
      descripcion: "Sistema de gestión de recursos humanos con autenticación y panel administrativo completo.",
      tecnologias: ["React", "Firebase", "Tailwind"],
      imagen: "/proyectos/SISTEMARH.png",
      enlace: "https://sistemahh.netlify.app/",
      categoria: "Web",
      estado: "Completado",
      tipo: "Aplicación Web",
      color: "from-blue-500 to-purple-600",
      iconos: { React: "⚛️", Firebase: "🔥", Tailwind: "🎨" }
    },
    {
      titulo: "Perfumería",
      descripcion: "Página de visualización de perfumes con sus especificaciones detalladas y catálogo interactivo.",
      tecnologias: ["HTML", "CSS"],
      imagen: "/proyectos/PERFUMERIA.png",
      enlace: "https://examenpractico.netlify.app",
      categoria: "Web",
      estado: "Completado",
      tipo: "Landing Page",
      color: "from-pink-500 to-rose-600",
      iconos: { HTML: "🏗️", CSS: "🎨" }
    },
    {
      titulo: "ChatBot-TopRealState",
      descripcion: "Chatbot inmobiliario con Gemini AI y React. Asistente inteligente para consultas sobre propiedades, valoraciones y servicios inmobiliarios.",
      tecnologias: ["React", "CCS", "Gemini"],
      imagen: "/proyectos/chatbot.png",
      enlace: "https://preeminent-dango-26a849.netlify.app",
      categoria: "Web",
      estado: "En desarrollo",
      tipo: "Aplicación Web",
      color: "from-emerald-500 to-teal-600",
      iconos: { React: "⚛️", CCS: "🎨", Gemini: "🤖" }
    },
    {
      titulo: "MarketPal",
      descripcion: "Sistema POS completo con gestión de inventario, ventas y reportes en tiempo real.",
      tecnologias: ["C#", ".Net", "Firebase"],
      imagen: "/proyectos/MARKETPAL.png",
      enlace: "https://github.com/MikeGPQ/MarketPal-1.2.git",
      categoria: "Desktop",
      estado: "Completado",
      tipo: "Sistema POS",
      color: "from-orange-500 to-red-600",
      iconos: { "C#": "💎", ".Net": "🔷", Firebase: "🔥" }
    },
  ];

  const categorias = ["Todos", "Web", "Desktop"];
  const proyectosFiltrados = filtro === "Todos" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filtro);

  const getEstadoColor = (estado) => {
    return estado === "Completado" 
      ? "bg-green-100 text-green-700 border-green-200" 
      : "bg-yellow-100 text-yellow-700 border-yellow-200";
  };

  const getEstadoIcon = (estado) => {
    return estado === "Completado" ? "✅" : "⚠️";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="p-8 max-w-7xl mx-auto text-slate-800 relative">
        {/* HEADER */}
        <div className="text-center mb-20 pt-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Mis Proyectos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web y de software
          </p>
        </div>

        {/* FILTROS */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-lg">
            <div className="flex gap-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltro(categoria)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                    filtro === categoria
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-white/50 hover:text-blue-600"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{proyectos.length}</div>
            <div className="text-slate-600 font-medium">Proyectos Totales</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {proyectos.filter(p => p.estado === "Completado").length}
            </div>
            <div className="text-slate-600 font-medium">Completados</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {proyectos.filter(p => p.estado === "En desarrollo").length}
            </div>
            <div className="text-slate-600 font-medium">En Desarrollo</div>
          </div>
        </div>

        {/* PROYECTOS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getEstadoColor(proyecto.estado)}`}>
                  <span>{getEstadoIcon(proyecto.estado)}</span>
                  {proyecto.estado}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Project Type */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${proyecto.color} rounded-full animate-pulse`}></div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {proyecto.tipo}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {proyecto.titulo}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {proyecto.descripcion}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tec, i) => (
                    <div
                      key={i}
                      className="group/tech flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-blue-50 hover:to-purple-50 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-all duration-300"
                    >
                      <span className="group-hover/tech:scale-110 transition-transform">
                        {proyecto.iconos[tec] || "💻"}
                      </span>
                      {tec}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center gap-3 w-full justify-center px-6 py-3 bg-gradient-to-r ${proyecto.color} text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden relative`}
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    {proyecto.enlace.includes('github') ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Ver código
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver proyecto
                      </>
                    )}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">¿Te interesa colaborar?</h3>
            <p className="text-slate-600 mb-6">
              Siempre estoy abierto a nuevos proyectos y oportunidades de colaboración.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}