"use client";

import Link from "next/link";

// Datos editables manualmente — reemplazables por respuesta de API
const rounds = [
  {
    ronda: "01",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "CURICÓ",
    cuando: "13–15 Mar",
    distancia: "176",
    hoverBg: "#02ffd1",
    hoverText: "#111111",
    url: "https://imagecolorpicker.com/es", // ← Reemplazar con la URL real
  },
];

export default function FechasPasadas() {
  return (
    <section
      className="bg-[#111111] text-white w-full"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      {/* Header */}
      <div
        className="section-px"
        style={{ paddingTop: "80px", paddingBottom: "40px" }}
      >
        <h2
          className="monument section-heading"
          style={{ fontWeight: 800, lineHeight: "100%", letterSpacing: "0" }}
        >
          Fechas pasadas
        </h2>
      </div>

      {/* Tabla */}
      <div className="w-full">
        {/* Encabezados de columna */}
        <div
          className="table-col-headers items-center justify-between border-b border-white/20 section-px"
          style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          <span className="monument col-ronda" style={{ fontSize: "14px" }}>Ronda</span>
          <span className="monument col-donde" style={{ fontSize: "14px" }}>Donde</span>
          <span className="monument col-cuando" style={{ fontSize: "14px" }}>Cuando</span>
          <span className="monument col-dist flex" style={{ fontSize: "14px", textAlign: "right" }}>Distancia</span>
        </div>

        {/* Filas */}
        {rounds.map((item, index) => (
          <div key={index} className="border-b border-white/20">
            {/* Layout DESKTOP/TABLET (4 columnas responsivas) */}
            <Link
              href={item.url}
              className="table-row-desktop items-center justify-between section-px group"
              style={{
                height: "118px",
                transition: "height 0.3s ease, background-color 0.3s ease",
                color: "#ffffff",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.height = "150px";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = item.hoverBg;
                (e.currentTarget as HTMLAnchorElement).style.color = item.hoverText;
                const arrow = e.currentTarget.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) arrow.style.opacity = "1";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.height = "118px";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                const arrow = e.currentTarget.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) arrow.style.opacity = "0";
              }}
              onTouchStart={e => {
                (e.currentTarget as HTMLAnchorElement).style.height = "150px";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = item.hoverBg;
                (e.currentTarget as HTMLAnchorElement).style.color = item.hoverText;
                const arrow = e.currentTarget.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) arrow.style.opacity = "1";
              }}
              onTouchEnd={e => {
                (e.currentTarget as HTMLAnchorElement).style.height = "118px";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                const arrow = e.currentTarget.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) arrow.style.opacity = "0";
              }}
            >
              <span className="monument row-font-ronda col-ronda">{item.ronda}</span>
              <div className="col-donde flex flex-col justify-center">
                <span className="monument uppercase" style={{ fontSize: "10px", letterSpacing: "0.08em", opacity: 0.8 }}>
                  {item.titulo}
                </span>
                <span className="bagiqu whitespace-nowrap">{item.ciudad}</span>
              </div>
              <span className="monument col-cuando" style={{ fontSize: "24px" }}>{item.cuando}</span>
              <div className="col-dist flex items-baseline gap-1.5" style={{ position: "relative" }}>
                <span className="monument row-font-dist">{item.distancia}</span>
                <span className="monument uppercase" style={{ fontSize: "12px", opacity: 0.7 }}>km</span>
                {/* Flecha — visible solo en hover */}
                <div
                  className="arrow-icon"
                  style={{
                    position: "absolute",
                    right: "-56px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "40px", height: "40px", borderRadius: "50%",
                    border: "2px solid currentColor", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    flexShrink: 0, opacity: 0,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5"/>
                    <polyline points="5 5 19 5 19 19"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Layout MOBILE (apilado) */}
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="table-row-mobile items-center justify-between section-px"
              style={{ minHeight: "72px", paddingTop: "12px", paddingBottom: "12px", color: "#ffffff", textDecoration: "none", transition: "background-color 0.3s ease" }}
              onTouchStart={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = item.hoverBg;
                (e.currentTarget as HTMLAnchorElement).style.color = item.hoverText;
              }}
              onTouchEnd={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
            >
              <span className="monument" style={{ fontSize: "28px", width: "44px", flexShrink: 0 }}>{item.ronda}</span>
              <div className="flex flex-col justify-center flex-1 mx-3">
                <span className="monument uppercase" style={{ fontSize: "9px", letterSpacing: "0.08em", opacity: 0.7 }}>{item.titulo}</span>
                <span className="bagiqu whitespace-nowrap">{item.ciudad}</span>
              </div>
              <div className="flex flex-col items-end" style={{ flexShrink: 0 }}>
                <span className="monument" style={{ fontSize: "14px" }}>{item.cuando}</span>
                <div className="flex items-baseline gap-1">
                  <span className="monument" style={{ fontSize: "18px" }}>{item.distancia}</span>
                  <span className="monument uppercase" style={{ fontSize: "10px", opacity: 0.7 }}>km</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
