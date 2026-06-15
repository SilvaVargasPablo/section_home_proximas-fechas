"use client";

import { useEffect, useState } from "react";

// ── Configuración ajustable ──────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-06-16T00:00:00"); // ← Cambia esta fecha
const EVENT_CITY = "CURICÓ";                         // ← Nombre de la ciudad
const EVENT_DATES = "DEL 13 AL 15 DE MARZO";          // ← Fechas del evento
const CTA_URL = "#";                              // ← URL del botón VER MÁS
// ────────────────────────────────────────────────────────────────────────────

function calcTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { dias: 0, hrs: 0, min: 0, seg: 0 };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Contador() {
  const [time, setTime] = useState(calcTimeLeft(TARGET_DATE));

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(TARGET_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="bg-[#111111] text-white w-full overflow-hidden"
      style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}
    >
      {/* Contenido principal */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
          gap: "0px",
        }}
      >
        {/* Título ciudad con placeholders para rayos */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          {/* Placeholder rayo izquierdo */}
          <div style={{ width: "48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Aquí va el PNG del rayo izquierdo */}
          </div>

          <h2
            className="bagiqu"
            style={{
              fontSize: "60px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#00f5c4",
              lineHeight: "100%",
              letterSpacing: "0%",
              margin: 0,
            }}
          >
            {EVENT_CITY}
          </h2>

          {/* Placeholder rayo derecho */}
          <div style={{ width: "48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Aquí va el PNG del rayo derecho */}
          </div>
        </div>

        {/* Subtítulo fechas */}
        <p
          className="monument"
          style={{
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "0%",
            lineHeight: "100%",
            color: "#ffffff",
            margin: "0 0 48px 0",
          }}
        >
          {EVENT_DATES}
        </p>

        {/* Countdown + Labels — con padding lateral para respetar márgenes */}
        <div className="contador-wrapper" style={{ width: "100%" }}>
          {/* Fila de números */}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {[
              { value: pad(time.dias) },
              { value: pad(time.hrs) },
              { value: pad(time.min) },
              { value: pad(time.seg) },
            ].map((unit, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <span
                  className="contador-numero monument"
                  style={{
                    fontWeight: 800,
                    lineHeight: "100%",
                    letterSpacing: "0",
                    color: "#ffffff",
                    fontVariantNumeric: "tabular-nums",
                    textAlign: "center",
                    display: "block",
                    flex: 1,
                  }}
                >
                  {unit.value}
                </span>
                {i < 3 && (
                  <span
                    className="contador-separador monument"
                    style={{
                      fontWeight: 800,
                      lineHeight: "100%",
                      color: "#ffffff",
                      userSelect: "none",
                      flexShrink: 0,
                    }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Fila de labels */}
          <div style={{ display: "flex", width: "100%", marginTop: "12px", marginBottom: "16px" }}>
            {["Días", "Hrs", "Min", "Seg"].map((label) => (
              <span
                key={label}
                className="contador-label monument"
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Botón VER MÁS */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="monument"
          style={{
            marginTop: "32px",
            display: "inline-block",
            backgroundColor: "#00f5c4",
            color: "#111111",
            fontWeight: 800,
            fontSize: "clamp(12px, 1vw, 14px)",
            letterSpacing: "0.12em",
            padding: "14px 32px",
            textDecoration: "none",
            clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          VER MÁS
        </a>
      </div>
    </section>
  );
}
