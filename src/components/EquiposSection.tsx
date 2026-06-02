"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Logos
import lamborghiniLogo from "../assets/img/lamborghini_logo.png";
import lexusLogo from "../assets/img/lexus_logo.png";
import porsheLogo from "../assets/img/porshe_logo.png";
import roverLogo from "../assets/img/Rover_logo.png";
import peugeotLogo from "../assets/img/Peugeot_logo.png";

// Autos
import toyotaRosa from "../assets/img/toyota_rosa.png";
import shellAzul from "../assets/img/shell_azul.png";
import redbullAzul from "../assets/img/redbull_azul.png";
import toyotaRojo from "../assets/img/toyota_rojo.png";
import shellRojo from "../assets/img/shell_rojo.png";
import redbullDorado from "../assets/img/redbull_dorado.png";
import toyotaNegro from "../assets/img/toyota_negro.png";
import shellCeleste from "../assets/img/shell_celeste.png";
import fordBlanco from "../assets/img/ford_blanco.png";
import fordRojo from "../assets/img/ford_rojo.png";

// Fondo
import ellipse from "../assets/img/Ellipse_00.png";

const equipos = [
  { nombre: "Prieto",                  logo: lamborghiniLogo, carImage: toyotaRosa,    bgColor: "#1a6b4a", url: "/equipos/prieto" },
  { nombre: "Jokerally",               logo: lexusLogo,       carImage: shellAzul,     bgColor: "#2a7a8a", url: "/equipos/jokerally" },
  { nombre: "JRT",                     logo: lamborghiniLogo, carImage: redbullAzul,   bgColor: "#1a2e6b", url: "/equipos/jrt" },
  { nombre: "Rosselot Team",           logo: lamborghiniLogo, carImage: toyotaRojo,    bgColor: "#b03080", url: "/equipos/rosselot-team" },
  { nombre: "Biobio Rally Team",       logo: lamborghiniLogo, carImage: shellRojo,     bgColor: "#c04020", url: "/equipos/biobio-rally-team" },
  { nombre: "KMR Motorsport",          logo: porsheLogo,      carImage: redbullDorado, bgColor: "#111111", url: "/equipos/kmr-motorsport" },
  { nombre: "Persia Motorsport",       logo: lamborghiniLogo, carImage: toyotaNegro,   bgColor: "#8b1a1a", url: "/equipos/persia-motorsport" },
  { nombre: "SAG Rally Team",          logo: lamborghiniLogo, carImage: shellCeleste,  bgColor: "#1a4a8b", url: "/equipos/sag-rally-team" },
  { nombre: "Conveyor belt technology",logo: roverLogo,       carImage: fordBlanco,    bgColor: "#2a5a7a", url: "/equipos/conveyor-belt-technology" },
  { nombre: "Domke Racing",            logo: peugeotLogo,     carImage: fordRojo,      bgColor: "#7a3ab0", url: "/equipos/domke-racing" },
];

export default function EquiposSection() {
  const carRefs = useRef<HTMLDivElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section
      className="bg-[#111111] text-white w-full"
      style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: "56px", paddingRight: "56px", paddingBottom: "0", position: "relative", overflow: "hidden" }}
    >
      {/* Fondo elipse */}
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src={ellipse}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "left center" }}
          priority
        />
      </div>

      {/* Título */}
      <div
        style={{
          width: "1312px",
          height: "312px",
          marginLeft: "51px",
          position: "relative",
          zIndex: 1,
          opacity: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2
          className="monument"
          style={{
            fontSize: "220px",
            fontWeight: 800,
            fontStyle: "italic",
            color: "#00f5c4",
            lineHeight: "100%",
            letterSpacing: "0%",
            margin: 0,
          }}
        >
          Equipos
        </h2>
      </div>

      {/* Grid de cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          paddingBottom: "40px",
          zIndex: 1,
        }}
      >
        {equipos.map((equipo, index) => (
          <a
            key={index}
            href={equipo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: equipo.bgColor,
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              width: "396px",
              height: "437px",
              cursor: "pointer",
              opacity: 1,
              display: "block",
              textDecoration: "none",
            }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              if (carRefs.current[index]) {
                carRefs.current[index].style.transform = "scale(1.1) translateX(4%)";
              }
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              if (carRefs.current[index]) {
                carRefs.current[index].style.transform = "scale(1) translateX(0)";
              }
            }}
          >
            {/* Flecha top-right visible en hover */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 3,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hoveredIndex === index ? 1 : 0,
                transition: "opacity 0.3s ease",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14L14 4M14 4H6M14 4V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Capa superior: logo + nombre */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 2,
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={equipo.logo}
                  alt={equipo.nombre}
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </div>
              {/* Nombre del equipo */}
              <span
                className="monument"
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  fontStyle: "normal",
                  color: "#ffffff",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {equipo.nombre}
              </span>
            </div>

            {/* Capa inferior: imagen del auto con zoom hover */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "-8%",
                right: "-55%",
                top: "22%",
                overflow: "hidden",
              }}
            >
              {/* Auto con zoom hover */}
              <div
                ref={(el) => { if (el) carRefs.current[index] = el; }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transition: "transform 0.4s ease",
                  transformOrigin: "bottom center",
                }}
              >
                <Image
                  src={equipo.carImage}
                  alt={`Auto ${equipo.nombre}`}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom center",
                    filter: "drop-shadow(0px 20px 15px rgba(0, 0, 0, .8))",
                  }}
                  sizes="396px"
                />
              </div>

              {/* Sin sombra de piso — se usa drop-shadow en la imagen */}
            </div>
          </a>
        ))}
      </div>

      {/* Franja blanca inferior — las últimas cards la solapan */}
      <div
        style={{
          position: "relative",
          zIndex: 0,
          width: "100vw",
          marginLeft: "calc(-56px)",
          height: "200px",
          backgroundColor: "#ffffff",
          marginTop: "-120px",
        }}
      />
    </section>
  );
}
