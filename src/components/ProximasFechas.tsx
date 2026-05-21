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
          style={{ fontSize: "80px", lineHeight: "100%", letterSpacing: "0" }}
        >
          Próximas fechas
        </h1>

        {/* Badge */}
        <div className="flex flex-col items-end gap-1">
          <p className="monument uppercase" style={{ fontSize: "12px", lineHeight: "100%", letterSpacing: "0.1em" }}>
            Enciende tu
          </p>
          <div className="flex items-center gap-1">
            <span
              className="monument uppercase border border-[#00F5C4] text-[#00F5C4]"
              style={{ fontSize: "12px", padding: "4px 8px", lineHeight: "100%", letterSpacing: "0.1em" }}
            >
              Modo
            </span>
            <span
              className="monument uppercase bg-[#00F5C4] text-black"
              style={{ fontSize: "12px", padding: "4px 8px", lineHeight: "100%", letterSpacing: "0.1em" }}
            >
              Rally
            </span>
          </div>
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
          <span className="monument w-[100px]" style={{ fontSize: "20px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>Ronda</span>
          <span className="monument flex-1" style={{ fontSize: "20px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>Donde</span>
          <span className="monument w-[240px]" style={{ fontSize: "20px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>Cuando</span>
          <span className="monument w-[180px] justify-end" style={{ fontSize: "20px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>Distancia</span>
        </div>

        {/* Filas */}
        {rounds.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-white/20"
            style={{
              height: "118px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "56px",
              paddingRight: "56px",
            }}
          >
            {/* Ronda */}
            <span className="monument w-[100px] text-center" style={{ fontSize: "48px" }}>
              {item.ronda}
            </span>

            {/* Donde */}
            <div className="flex flex-col items-center justify-center flex-1">
              <span className="monument uppercase text-center" style={{ fontSize: "11px", letterSpacing: "0.08em", opacity: 0.8 }}>
                {item.titulo}
              </span>
              <span className="bagiqu text-center">
                {item.ciudad}
              </span>
            </div>

            {/* Cuando */}
            <span className="monument w-[240px] text-center" style={{ fontSize: "32px" }}>
              {item.cuando}
            </span>

            {/* Distancia */}
            <div className="flex items-baseline justify-center gap-1.5 w-[180px]">
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
