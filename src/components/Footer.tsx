"use client";

import { useState } from "react";

/* ── Social icon SVGs ───────────────────────────────────────── */
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z"/>
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <XIcon />, href: "#", label: "X" },
  { icon: <TikTokIcon />, href: "#", label: "TikTok" },
];

const navColumns = [
  {
    title: "Próximas fechas",
    links: ["Curicó", "Los Andes", "Copiapó", "Pichilemu"],
  },
  {
    title: "Fechas pasadas",
    links: ["Talca", "Concepción"],
  },
  {
    title: "Merch",
    links: ["Poleras", "Gorros", "Chaquetas", "Accesorios"],
  },
  {
    title: "Blog",
    links: ["News", "Últimas noticias"],
  },
  {
    title: "Ayuda",
    links: ["Preguntas frecuentes", "Términos y condiciones", "Políticas de privacidad", "Contáctanos"],
  },
];

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      style={{
        color: "rgba(255,255,255,0.55)",
        fontFamily: "'M PLUS 1', Arial, sans-serif",
        fontSize: "14px",
        textDecoration: "none",
        lineHeight: "1",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
    >
      {children}
    </a>
  );
}

function FooterColTitle({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: "#ffffff",
        fontFamily: "'M PLUS 1', Arial, sans-serif",
        fontWeight: 700,
        fontSize: "15px",
        marginBottom: "20px",
        display: "block",
      }}
    >
      {children}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#191919", width: "100%", maxWidth: "1440px", margin: "0 auto" }}>

      {/* Contenido principal */}
      <div
        className="section-px footer-main"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >

        {/* Col 1 — Logo + Contacto */}
        <div className="footer-col-brand">
          {/* Logo RallyMobil */}
          <div style={{ marginBottom: "24px" }}>
            <span
              className="monument"
              style={{ fontSize: "26px", color: "#ffffff", fontStyle: "normal" }}
            >
              Rally
              <span style={{ color: "#E8344E" }}>M</span>
              obil
              <sup style={{ fontSize: "11px", color: "#ffffff", verticalAlign: "super" }}>™</sup>
            </span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'M PLUS 1', Arial, sans-serif", margin: "0 0 6px" }}>
            Llámanos
          </p>
          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, fontFamily: "'M PLUS 1', Arial, sans-serif", margin: "0 0 24px" }}>
            800 200 354
          </p>

          {/* Redes sociales */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cols nav — agrupadas en pares (Próximas+Pasadas) y (Merch+Blog) */}
        <div className="footer-col-pair">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <FooterColTitle>{navColumns[0].title}</FooterColTitle>
            {navColumns[0].links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "40px" }}>
            <FooterColTitle>{navColumns[1].title}</FooterColTitle>
            {navColumns[1].links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
          </div>
        </div>

        <div className="footer-col-pair">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <FooterColTitle>{navColumns[2].title}</FooterColTitle>
            {navColumns[2].links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "40px" }}>
            <FooterColTitle>{navColumns[3].title}</FooterColTitle>
            {navColumns[3].links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
          </div>
        </div>

        {/* Col Ayuda */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <FooterColTitle>{navColumns[4].title}</FooterColTitle>
          {navColumns[4].links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
        </div>

        {/* Col Newsletter */}
        <div className="footer-col-newsletter">
          <FooterColTitle>Suscríbete a nuestro newsletter</FooterColTitle>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: "0" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              style={{
                flex: 1,
                backgroundColor: "#2a2a2a",
                color: "#ffffff",
                fontFamily: "'M PLUS 1', Arial, sans-serif",
                fontSize: "13px",
                padding: "12px 16px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRight: "none",
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
                fontSize: "12px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "0 6px 6px 0",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00d4aa")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00f5c4")}
            >
              Suscribirme
            </button>
          </form>
        </div>

      </div>

      {/* Barra inferior */}
      <div
        className="section-px footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "24px",
          paddingBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'M PLUS 1', Arial, sans-serif",
            fontSize: "13px",
          }}
        >
          @Copyright 2024 Copec S.A. Todos los derechos reservados
        </span>

        {/* COPEC wordmark */}
        <span
          className="monument"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "14px",
            letterSpacing: "0.15em",
            fontStyle: "normal",
          }}
        >
          COPEC
        </span>
      </div>

    </footer>
  );
}
