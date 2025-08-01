import SectionTitle from "../Components/SectionTitle";

export default function AcercaDeMi (){
  return (
    <div className="p-8 max-w-4xl mx-auto text-neutral-900">

      <SectionTitle>Acerca de mí</SectionTitle>

      <div className="space-y-10 mt-10">

        {/* LENGUAJES */}
        <section className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Tecnologias que domino</h2>
          <p className="text-neutral-600">
            JavaScript · Python · HTML · CSS · React 
          </p>
        </section>

        {/* FORMACIÓN */}
        <section className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Formación</h2>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">Escuelas</h3>
          <p className="text-sm text-neutral-600 mb-4">
          Ingeniería en Sistemas [UNID] 
          </p>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">Cursos</h3>
          <p className="text-sm text-neutral-600">
            Scrum esencial – 2023 · Fundamentos esenciales de la programación – 2024 · Python esencial – 2024 – Cisco Packet Tracer
          </p>
        </section>

        {/* PASATIEMPOS */}
        <section className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Pasatiempos</h2>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">Hobbies</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Leer · Tocar la Guitarra · Series y Peliculas · Videojuegos
          </p>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">Ejercicio</h3>
          <p className="text-sm text-neutral-600">
            Futbol · Gimnasio
          </p>
        </section>
      </div>
    </div>
  );
}