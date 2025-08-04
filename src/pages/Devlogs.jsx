import SectionTitle from "../components/SectionTitle";

export default function Devlogs() {
  const devlogs = [
    {
      titulo: "Bitácora #1 – Inicio del proyecto",
      id: "1l4UdaqKOMGy_fHAX5BnCjPM47Qz2raI-",
      descripcion: "Primeros pasos y configuración inicial del proyecto de portafolio."
    },
    {
      titulo: "Bitácora #2 – Ejecución primer aplicativo SPA React, con un entorno de desarrollo integral configurado",
      id: "1IfM8M2Wv6FVPGClaZb7CrHiipQGKPcxh",
      descripcion: "Configuración completa del entorno de desarrollo y primera implementación SPA."
    },
    {
      titulo: "Bitácora #3– Ejecución del primer aplicativo SPA React, con uso de Router y de Google Auth",
      id: "1RFBIiJUPfQdSiawXBaBjvF1Kyb8kjkgW",
      descripcion: "Implementación de navegación y sistema de autenticación con Google."
    },
    {
      titulo: "Bitácora #4 Examen Práctico Perfumería",
      id: "11gF06YfUu3I1sV80CC4mWrOFBqycxaUN",
      descripcion: "Desarrollo de aplicación práctica para gestión de perfumería."
    },
    {
      titulo: "Bitácora #5 Integración de los elementos básicos de Firebase y Firestore",
      id: "1xL7nFhpHUyRsK5Pp3CNkYkkxLsIDPAkd",
      descripcion: "Configuración e integración de base de datos Firebase y Firestore."
    },
    {
      titulo: "Bitácora #6 Finalización del CRUD",
      id: "1arAJxpcs1pGQVbC2nQxiRWXDl2195lhh",
      descripcion: "Completado del sistema CRUD con todas las operaciones básicas."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-8 py-16 max-w-6xl mx-auto">
          <div className="text-center">
            <SectionTitle className="text-white mb-4">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Devlogs
              </span>
            </SectionTitle>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Reflexiones en video sobre el proceso de desarrollo del portafolio y proyectos relacionados
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid gap-12 lg:gap-16">
          {devlogs.map((log, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Timeline connector */}
              {index < devlogs.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-200 to-transparent hidden lg:block"></div>
              )}
              
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                {/* Card header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start gap-6">
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {log.titulo}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {log.descripcion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video container */}
                <div className="px-8 pb-8">
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
                    <div className="aspect-w-16 aspect-h-9" style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={`https://drive.google.com/file/d/${log.id}/preview`}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="w-full h-full"
                        loading="lazy"
                        title={log.titulo}
                      ></iframe>
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Proceso de desarrollo documentado</span>
          </div>
        </div>
      </div>
    </div>
  );
}