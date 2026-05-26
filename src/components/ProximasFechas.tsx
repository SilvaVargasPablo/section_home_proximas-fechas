import Image from "next/image";
import modoRally from "../assets/img/modo-rally.png";

// Datos editables manualmente — reemplazables por respuesta de API
const rounds = [
  {
    ronda: "02",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "LOS ANDES",
    cuando: "10–12 Abr",
    distancia: "340",
  },
  {
    ronda: "03",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Copiapó",
    cuando: "15–17 May",
    distancia: "237",
  },
  {
    ronda: "04",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Pichilemu",
    cuando: "21–24 Jul",
    distancia: "189",
  },
  {
    ronda: "05",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Los Andes",
    cuando: "10–12 Abr",
    distancia: "340",
  },
];

export default function ProximasFechas() {
  return (
    <section
      className="bg-[#111111] text-white w-full"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ paddingTop: "103px", paddingBottom: "40px", paddingLeft: "56px", paddingRight: "56px" }}
      >
        <h1
          className="monument whitespace-nowrap"
          style={{ fontSize: "64px", fontWeight: 800, lineHeight: "100%", letterSpacing: "0" }}
        >
          Próximas fechas
        </h1>

        {/* Badge Modo Rally */}
        <div className="flex items-center">
          <Image
            src={modoRally}
            alt="Enciende tu Modo Rally"
            height={80}
            style={{ height: "80px", width: "auto" }}
            priority
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="w-full">
        {/* Encabezados de columna */}
        <div
          className="flex items-center justify-between border-b border-white/20"
          style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "56px",
            paddingRight: "56px",
          }}
        >
          <span className="monument" style={{ fontSize: "20px", width: "160px" }}>Ronda</span>
          <span className="monument" style={{ fontSize: "20px", width: "340px" }}>Donde</span>
          <span className="monument" style={{ fontSize: "20px", width: "280px" }}>Cuando</span>
          <span className="monument" style={{ fontSize: "20px", width: "200px", textAlign: "right" }}>Distancia</span>
        </div>

        {/* Filas */}
        {rounds.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-white/20"
            style={{
              height: "118px",
              paddingLeft: "56px",
              paddingRight: "56px",
            }}
          >
            {/* Ronda */}
            <span className="monument" style={{ fontSize: "48px", width: "160px", flexShrink: 0 }}>
              {item.ronda}
            </span>

            {/* Donde */}
            <div className="flex flex-col justify-center" style={{ width: "340px", flexShrink: 0 }}>
              <span className="monument uppercase" style={{ fontSize: "11px", letterSpacing: "0.08em", opacity: 0.8 }}>
                {item.titulo}
              </span>
              <span className="bagiqu whitespace-nowrap">
                {item.ciudad}
              </span>
            </div>

            {/* Cuando */}
            <span className="monument whitespace-nowrap" style={{ fontSize: "32px", width: "280px", flexShrink: 0 }}>
              {item.cuando}
            </span>

            {/* Distancia */}
            <div className="flex items-baseline gap-1.5" style={{ width: "200px", flexShrink: 0, justifyContent: "flex-end" }}>
              <span className="monument" style={{ fontSize: "48px" }}>
                {item.distancia}
              </span>
              <span className="monument uppercase" style={{ fontSize: "12px", opacity: 0.7 }}>
                km
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Checkered flag */}
      <div
        style={{
          width: "1507px",
          height: "137px",
          backgroundImage: "repeating-conic-gradient(#fff 0% 25%, #111 0% 50%)",
          backgroundSize: "48px 48px",
        }}
      />
    </section>
  );
}
