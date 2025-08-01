import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white text-neutral-900">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-light tracking-tight">Jorge Castro</h1>
        <p className="text-md text-neutral-500 mt-2">Estudiante de Ingenieria en Software</p>
        <p className="mt-6 italic text-neutral-400">“Transformo ideas en interfaces funcionales y atractivas.”</p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/proyectos"
            className="px-6 py-2 border border-neutral-800 rounded-full text-sm hover:bg-neutral-100 transition"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contacto"
            className="px-6 py-2 text-sm text-neutral-700 underline underline-offset-4 hover:text-black transition"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="mb-24">
        <SectionTitle>Proyectos destacados</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {}
          <div className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition">
            <img
              src="/proyectos/SISTEMARH.png"
              alt="Proyecto RH WebApp"
              className="rounded mb-4"
            />
            <h3 className="text-lg font-medium mb-1">Proyecto RH - WebApp</h3>
            <p className="text-sm text-neutral-500 mb-3">
              Sistema de gestión de recursos humanos con autenticación y panel administrativo.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-600 mb-4">
              <span className="bg-neutral-100 px-3 py-1 rounded-full">React</span>
              <span className="bg-neutral-100 px-3 py-1 rounded-full">Firebase</span>
              <span className="bg-neutral-100 px-3 py-1 rounded-full">Tailwind</span>
            </div>
            <a
              href="https://sistemahh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>

          {}
          <div className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition">
            <img
              src="/proyectos/PERFUMERIA.png"
              alt="Perfumeria"
              className="rounded mb-4"
            />
            <h3 className="text-lg font-medium mb-1">Perfumeria</h3>
            <p className="text-sm text-neutral-500 mb-3">
              Plataforma para visualizacion de Perfumes y sus Especificaciones
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-600 mb-4">
              <span className="bg-neutral-100 px-3 py-1 rounded-full">REACT</span>
              <span className="bg-neutral-100 px-3 py-1 rounded-full">TAILDWIN</span>
            </div>
            <a
              href="https://examenpractico.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/proyectos" className="text-sm underline text-neutral-700 hover:text-black">
            Ver todos los proyectos
          </Link>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="mb-20">
        <SectionTitle>Tecnologías que utilizo</SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
          {["React", "Tailwind", "Firebase", "GitHub", "Netlify"].map((tech) => (
            <span
              key={tech}
              className="border border-neutral-300 rounded-full px-4 py-1 text-neutral-600 hover:bg-neutral-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FRASE */}
      <section className="text-center text-neutral-400 italic text-md mt-12">
        <p>“El diseño no es solo cómo se ve, sino cómo funciona.” – Steve Jobs</p>
      </section>
    </div>
  );
}
