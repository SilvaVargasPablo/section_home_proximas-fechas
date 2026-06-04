"use client";

import Image from "next/image";
import modoRally from "../assets/img/modo-rally.png";

// Datos editables manualmente — reemplazables por respuesta de API
const rounds = [
  {
    ronda: "02",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Los Andes",
    cuando: "10–12 Abr",
    distancia: "340",
    hoverBg: "#ff51c5",
    hoverText: "#ffffff",
  },
  {
    ronda: "03",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Copiapó",
    cuando: "15–17 May",
    distancia: "237",
    hoverBg: "#ff9e03",
    hoverText: "#111111",
  },
  {
    ronda: "04",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Pichilemu",
    cuando: "21–24 Jul",
    distancia: "189",
    hoverBg: "#020eff",
    hoverText: "#ffffff",
  },
  {
    ronda: "05",
    titulo: "COPEC RALLYMOBIL™",
    ciudad: "Los Andes",
    cuando: "10–12 Abr",
    distancia: "340",
    hoverBg: "#ff51c5",
    hoverText: "#ffffff",
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
        className="section-px flex items-center justify-between"
        style={{ paddingTop: "103px", paddingBottom: "40px" }}
      >
        <h1
          className="monument section-heading"
          style={{ fontWeight: 800, lineHeight: "100%", letterSpacing: "0" }}
        >
          Próximas fechas
        </h1>

        {/* Badge Modo Rally — oculto en mobile */}
        <div className="hidden sm:flex items-center">
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
          <div key={index} className="border-b border-white/20 cursor-pointer">
            {/* Layout DESKTOP/TABLET (4 columnas responsivas) */}
            <div
              className="table-row-desktop items-center justify-between section-px"
              style={{
                height: "118px",
                transition: "height 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.height = "150px";
                (e.currentTarget as HTMLDivElement).style.backgroundColor = item.hoverBg;
                (e.currentTarget as HTMLDivElement).style.color = item.hoverText;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.height = "118px";
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.color = "#ffffff";
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
              <div className="col-dist flex items-baseline gap-1.5">
                <span className="monument row-font-dist">{item.distancia}</span>
                <span className="monument uppercase" style={{ fontSize: "12px", opacity: 0.7 }}>km</span>
              </div>
            </div>

            {/* Layout MOBILE (apilado) */}
            <div
              className="table-row-mobile items-center justify-between section-px"
              style={{ minHeight: "72px", paddingTop: "12px", paddingBottom: "12px", backgroundColor: "transparent", color: "#ffffff" }}
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
            </div>
          </div>
        ))}
      </div>

      {/* Checkered flag */}
      <div
        className="checkered-flag"
        style={{
          backgroundImage: "repeating-conic-gradient(#fff 0% 25%, #111 0% 50%)",
        }}
      />
    </section>
  );
}
