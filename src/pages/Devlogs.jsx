import SectionTitle from "../components/SectionTitle";

export default function Devlogs (){
  const devlogs = [
    {
      titulo: "Bitácora #1 – Inicio del proyecto",
      id: "1l4UdaqKOMGy_fHAX5BnCjPM47Qz2raI-"
    },
    {
      titulo: "Bitácora #2 – Ejecucion primer aplicativo SPA React, con un entorno de desarrollo integral configurado",
      id: "1IfM8M2Wv6FVPGClaZb7CrHiipQGKPcxh"
    },
    {
      titulo: "Bitácora #3– Ejecución del primer aplicativo SPA React, con uso de Router y de Google Auth",
      id: "1RFBIiJUPfQdSiawXBaBjvF1Kyb8kjkgW"
    },
    {
      titulo: "Bitácora #4 Examen Practico Perfumeria",
      id: "11gF06YfUu3I1sV80CC4mWrOFBqycxaUN"
    },
    {
      titulo: "Bitácora #5 Integración de los elementos básicos de Firebase y Firestore.",
      id: "1xL7nFhpHUyRsK5Pp3CNkYkkxLsIDPAkd"
    },
    {
      titulo: "Bitácora #6 Finalizacion del Crud",
      id: "1arAJxpcs1pGQVbC2nQxiRWXDl2195lhh"
    },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto text-neutral-900">
      <SectionTitle>Devlogs</SectionTitle>

      <p className="text-sm text-neutral-600 mb-10 text-center">
        Reflexiones en video sobre el proceso de desarrollo del portafolio y proyectos relacionados.
      </p>

      <div className="space-y-12">
        {devlogs.map((log, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3">{log.titulo}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://drive.google.com/file/d/${log.id}/preview`}
                width="100%"
                height="360"
                allow="autoplay"
                className="rounded-md w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}