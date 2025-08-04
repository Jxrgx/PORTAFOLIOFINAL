import SectionTitle from "../components/SectionTitle";

export default function AcercaDeMi() {
  const technologies = [
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500", level: 85 },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-green-500", level: 80 },
    { name: "HTML", icon: "🏗️", color: "from-orange-500 to-red-500", level: 90 },
    { name: "CSS", icon: "🎨", color: "from-blue-400 to-purple-500", level: 85 },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500", level: 80 }
  ];

  const courses = [
    { name: "Scrum esencial", year: "2023", type: "Metodología" },
    { name: "Fundamentos esenciales de la programación", year: "2024", type: "Programación" },
    { name: "Python esencial", year: "2024", type: "Lenguaje" },
    { name: "Cisco Packet Tracer", year: "2024", type: "Redes" }
  ];

  const hobbies = [
    { name: "Leer", icon: "📚", description: "Libros de tecnología y ficción" },
    { name: "Tocar la Guitarra", icon: "🎸", description: "Rock y música clásica" },
    { name: "Series y Películas", icon: "🎬", description: "Ciencia ficción y drama" },
    { name: "Videojuegos", icon: "🎮", description: "Estrategia y aventura" }
  ];

  const sports = [
    { name: "Fútbol", icon: "⚽", description: "Deporte en equipo favorito" },
    { name: "Gimnasio", icon: "💪", description: "Entrenamiento de fuerza" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="p-8 max-w-6xl mx-auto text-slate-800 relative">
        {/* HEADER */}
        <div className="text-center mb-20 pt-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Acerca de mí
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {/* TECNOLOGÍAS */}
          <section className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  💻
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Tecnologías que domino</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="group/tech bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-bold text-slate-900">{tech.name}</h3>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Dominio</span>
                        <span className="text-slate-800 font-semibold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 group-hover/tech:animate-pulse`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FORMACIÓN */}
          <section className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  🎓
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Formación</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Educación Formal */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-slate-900">Educación Formal</h3>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-slate-900 mb-1">Ingeniería en Sistemas</h4>
                    <p className="text-slate-600 text-sm">Universidad Interamericana para el Desarrollo (UNID)</p>
                    <div className="mt-2 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      En curso
                    </div>
                  </div>
                </div>

                {/* Cursos y Certificaciones */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-slate-900">Cursos y Certificaciones</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {courses.map((course, index) => (
                      <div 
                        key={course.name}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-l-4 border-blue-400 hover:shadow-md transition-shadow"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-slate-900 text-sm">{course.name}</h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                            {course.year}
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs">{course.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PASATIEMPOS */}
          <section className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Pasatiempos</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Hobbies */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-slate-900">Hobbies</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {hobbies.map((hobby, index) => (
                      <div 
                        key={hobby.name}
                        className="group/hobby bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover/hobby:scale-110 transition-transform">
                            {hobby.icon}
                          </span>
                          <div>
                            <h4 className="font-semibold text-slate-900">{hobby.name}</h4>
                            <p className="text-slate-600 text-sm">{hobby.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ejercicio */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-slate-900">Ejercicio</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {sports.map((sport, index) => (
                      <div 
                        key={sport.name}
                        className="group/sport bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover/sport:scale-110 transition-transform">
                            {sport.icon}
                          </span>
                          <div>
                            <h4 className="font-semibold text-slate-900">{sport.name}</h4>
                            <p className="text-slate-600 text-sm">{sport.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FRASE MOTIVACIONAL */}
          <section className="text-center py-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg">
                <div className="text-5xl text-blue-200 mb-4">"</div>
                <p className="text-xl text-slate-700 font-medium italic leading-relaxed">
                  La tecnología es mejor cuando acerca a las personas.
                </p>
                <p className="text-blue-600 font-semibold mt-4">— Matt Mullenweg</p>
                <div className="text-5xl text-blue-200 mt-4 rotate-180">"</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}