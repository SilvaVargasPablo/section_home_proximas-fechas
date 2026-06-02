"use client";

import { useRef } from "react";
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

const equipos = [
  { nombre: "Prieto",                  logo: lamborghiniLogo, carImage: toyotaRosa,    bgColor: "#1a6b4a" },
  { nombre: "Jokerally",               logo: lexusLogo,       carImage: shellAzul,     bgColor: "#2a7a8a" },
  { nombre: "JRT",                     logo: lamborghiniLogo, carImage: redbullAzul,   bgColor: "#1a2e6b" },
  { nombre: "Rosselot Team",           logo: lamborghiniLogo, carImage: toyotaRojo,    bgColor: "#b03080" },
  { nombre: "Biobio Rally Team",       logo: lamborghiniLogo, carImage: shellRojo,     bgColor: "#c04020" },
  { nombre: "KMR Motorsport",          logo: porsheLogo,      carImage: redbullDorado, bgColor: "#111111" },
  { nombre: "Persia Motorsport",       logo: lamborghiniLogo, carImage: toyotaNegro,   bgColor: "#8b1a1a" },
  { nombre: "SAG Rally Team",          logo: lamborghiniLogo, carImage: shellCeleste,  bgColor: "#1a4a8b" },
  { nombre: "Conveyor belt technology",logo: roverLogo,       carImage: fordBlanco,    bgColor: "#2a5a7a" },
  { nombre: "Domke Racing",            logo: peugeotLogo,     carImage: fordRojo,      bgColor: "#7a3ab0" },
];

export default function EquiposSection() {
  const carRefs = useRef<HTMLDivElement[]>([]);
  return (
    <section
      className="bg-[#111111] text-white w-full"
      style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: "56px", paddingRight: "56px", paddingBottom: "80px" }}
    >
      {/* Título */}
      <h2
        className="bagiqu"
        style={{
          fontSize: "96px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#00f5c4",
          lineHeight: "1",
          paddingTop: "80px",
          paddingBottom: "48px",
        }}
      >
        Equipos
      </h2>

      {/* Grid de cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 396px)",
          gap: "16px",
        }}
      >
        {equipos.map((equipo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: equipo.bgColor,
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              width: "396px",
              height: "437px",
              cursor: "pointer",
              opacity: 1,
            }}
            onMouseEnter={() => {
              if (carRefs.current[index]) {
                carRefs.current[index].style.transform = "scale(1.1) translateX(4%)";
              }
            }}
            onMouseLeave={() => {
              if (carRefs.current[index]) {
                carRefs.current[index].style.transform = "scale(1) translateX(0)";
              }
            }}
          >
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
          </div>
        ))}
      </div>
    </section>
  );
}
