import SectionTitle from "../components/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contacto (){
  return (
    <div className="p-8 max-w-3xl mx-auto text-neutral-900">
      <SectionTitle>Contacto</SectionTitle>

      <p className="text-base text-neutral-600 mb-12 text-center max-w-xl mx-auto">
        Puedes contactarme a través de los siguientes medios. Estoy abierto a oportunidades de colaboración, proyectos o simplemente conversar sobre desarrollo y diseño.
      </p>

      <div className="space-y-8 text-lg text-neutral-800">

        {/* Correo */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-800 text-2xl" />
          <span className="break-all">jorgocios@gmail.com</span>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-neutral-800 text-2xl" />
          <a
            href="https://github.com/Jxrgx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Jxrgx
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-blue-700 text-2xl" />
          <a
            href="https://www.linkedin.com/in/jorge-julio-castro-alpuche-b78744290"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn - Jorge Julio Castro Alpuche
          </a>
        </div>
      </div>

      {/* Objetivo profesional */}
      <div className="mt-16 text-center text-base text-neutral-500 italic leading-relaxed">
        <p>“Mi objetivo es seguir creciendo como desarrollador,</p>
        <p>combinando creatividad y funcionalidad para construir soluciones efectivas.”</p>
      </div>
    </div>
  );
}
