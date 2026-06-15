"use client";

import { useState } from "react";
import Image from "next/image";

const sponsors = [
  {
    name: "Icono rally",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="40" height="40" rx="6" stroke="#00f5c4" strokeWidth="2.5"/>
        <path d="M22 10 L34 22 L22 34 L10 22 Z" stroke="#00f5c4" strokeWidth="2" fill="none"/>
        <circle cx="22" cy="22" r="4" fill="#00f5c4"/>
      </svg>
    ),
  },
  {
    name: "Arauco",
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="30" fill="#00f5c4" letterSpacing="-1">arauco</text>
      </svg>
    ),
  },
  {
    name: "Benedictino",
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="16" fontFamily="serif" fontWeight="700" fontSize="10" fill="#00f5c4" letterSpacing="2">BENEDICTINO</text>
        <line x1="0" y1="20" x2="140" y2="20" stroke="#00f5c4" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    name: "Pirelli",
    svg: (
      <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="8" width="98" height="20" rx="2" stroke="#00f5c4" strokeWidth="1.5"/>
        <text x="50" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="#00f5c4" letterSpacing="2">PIRELLI</text>
      </svg>
    ),
  },
  {
    name: "Kunstmann",
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#00f5c4" letterSpacing="-0.5">kunstmann</text>
      </svg>
    ),
  },
  {
    name: "Red Bull",
    svg: (
      <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Two bulls simplified */}
        <ellipse cx="20" cy="16" rx="12" ry="9" stroke="#00f5c4" strokeWidth="1.8" fill="none"/>
        <ellipse cx="44" cy="16" rx="12" ry="9" stroke="#00f5c4" strokeWidth="1.8" fill="none"/>
        <text x="32" y="38" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="10" fill="#00f5c4" letterSpacing="1.5">Red Bull</text>
      </svg>
    ),
  },
];

export default function SubNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <section style={{ backgroundColor: "#0d0d0d", width: "100%", maxWidth: "1440px", margin: "0 auto", overflow: "hidden" }}>

      {/* Imagen montaña superior */}
      <div className="subnews-hero" style={{ position: "relative", width: "100%" }}>
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1440&q=85"
          alt="Paisaje montañoso rally"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
          priority
        />
        {/* Degradado inferior para suavizar la transición */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, #0d0d0d 100%)",
          }}
        />
      </div>

      {/* Contenido — formulario */}
      <div
        className="section-px"
        style={{
          textAlign: "center",
          paddingTop: "68px",
          paddingBottom: "76px",
        }}
      >
        <h2
          className="monument subnews-title"
          style={{
            color: "#ffffff",
            fontWeight: 900,
            marginBottom: "12px",
          }}
        >
          Subscribe Newsletter
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontFamily: "'M PLUS 1', Arial, sans-serif",
            fontSize: "15px",
            marginBottom: "40px",
          }}
        >
          Ingresa tu correo y recibir actualizaciones diarias.
        </p>

        {/* Form */}
        <form
          className="subnews-form"
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            gap: "0",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo_@gmail.com"
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              color: "#111111",
              fontFamily: "'M PLUS 1', Arial, sans-serif",
              fontSize: "15px",
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px 0 0 6px",
              outline: "none",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            className="monument"
            style={{
              backgroundColor: "#00f5c4",
              color: "#111111",
              fontWeight: 800,
              fontSize: "14px",
              padding: "14px 28px",
              border: "none",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00d4aa")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00f5c4")}
          >
            Suscribirme
          </button>
        </form>
      </div>

      {/* Franja divisoria */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginLeft: "56px", marginRight: "56px" }} />

      {/* Logos sponsors */}
      <div
        className="section-px subnews-logos"
        style={{
          paddingTop: "58px",
          paddingBottom: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        {sponsors.map((s) => (
          <div
            key={s.name}
            title={s.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.85,
              transition: "opacity 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            {s.svg}
          </div>
        ))}
      </div>

    </section>
  );
}
