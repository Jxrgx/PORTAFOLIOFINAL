import SectionTitle from "../components/SectionTitle";

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Proyecto RH - WebApp",
      descripcion: "Sistema de gestión de recursos humanos con autenticación y panel administrativo.",
      tecnologias: ["React", "Firebase", "Tailwind"],
      imagen: "/proyectos/SISTEMARH.png",
      enlace: "https://sistemahh.netlify.app/",
    },
    {
      titulo: "Perfumeria",
      descripcion: "Clon visual de la plataforma Behance como práctica de diseño frontend.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagen: "/proyectos/PERFUMERIA.png",
      enlace: "https://examenpractico.netlify.app",
    },
    {
      titulo: "MarketPal",
      descripcion: "Aplicación para tomar notas simples con almacenamiento local.",
      tecnologias: ["C#", ".Net","Firebase"],
      imagen: "/proyectos/MARKETPAL.png",
      enlace: "https://github.com/MikeGPQ/MarketPal-1.2.git",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto text-neutral-900">
      <SectionTitle>Proyectos</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition bg-white"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="rounded mb-4"
            />
            <h3 className="text-lg font-medium mb-1">{proyecto.titulo}</h3>
            <p className="text-sm text-neutral-500 mb-3">{proyecto.descripcion}</p>

            <div className="flex flex-wrap gap-2 text-xs text-neutral-600 mb-4">
              {proyecto.tecnologias.map((tec, i) => (
                <span
                  key={i}
                  className="bg-neutral-100 px-3 py-1 rounded-full"
                >
                  {tec}
                </span>
              ))}
            </div>

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}