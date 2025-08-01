import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Inicio from "./pages/Inicio";
import AcercaDeMi from "./pages/AcercaDeMi";
import Proyectos from "./pages/Proyectos";
import Devlogs from "./pages/Devlogs";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/devlogs" element={<Devlogs />} />
            <Route path="/acerca" element={<AcercaDeMi />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}