import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nombre o Logo */}
        <h1 className="text-xl font-light tracking-tight">Mi Portafolio</h1>

        {/* Navegación */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-neutral-700">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca">Acerca de mí</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/devlogs">Devlogs</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>

          {/* Íconos externos */}
          <div className="flex gap-4 text-lg text-neutral-700">
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgocios@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-black transition"
  title="Enviar correo desde Gmail"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Jxrgx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-julio-castro-alpuche-b78744290"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}