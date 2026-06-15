"use client";

import Image from "next/image";
import Link from "next/link";
import bgImage from "../assets/img/hero-background.png";
import carFront from "../assets/img/Recurso 4@3x 1.png";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ maxWidth: "1440px", margin: "0 auto", minHeight: "100svh" }}
    >

      {/* ── CAPA 1: Fondo (Z-0) ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Desktop ≥1024px — posición exacta Figma */}
        <div
          className="hidden lg:block absolute pointer-events-none"
          style={{ left: "-15px", top: "-623px", width: "1844px", height: "2095px" }}
        >
          <Image
            src={bgImage}
            alt="RallyMobil Fondo"
            width={1844}
            height={2095}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Tablet y Mobile <1024px — object-cover responsivo */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src={bgImage}
            alt="RallyMobil Fondo"
            fill
            priority
            className="object-cover object-[62%_30%]"
          />
        </div>

        {/* Degradado inferior para fundir con la siguiente sección */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* ── CAPA 2: Contenido Textual y Navegación (Z-10) ───────────────── */}
      <div className="relative z-10 w-full flex flex-col h-full flex-grow">

        {/* Barra de Navegación Superior */}
        <div className="section-px pt-6 w-full">
          <nav className="flex items-center justify-between w-full backdrop-blur-md bg-white/5 border border-white/20 rounded-full px-6 md:px-10 py-4 shadow-lg">
            <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl">
              <span className="tracking-widest uppercase">COPEC</span>
              <span className="w-px h-6 bg-white/50 inline-block" />
              <span>RallyMobil™</span>
            </div>
            <div className="hidden md:flex gap-8 text-white font-semibold text-sm uppercase tracking-wide">
              <Link href="#" className="hover:text-[#00f5c4] transition-colors">Próximas fechas</Link>
              <Link href="#" className="hover:text-[#00f5c4] transition-colors">Posiciones</Link>
              <Link href="#" className="hover:text-[#00f5c4] transition-colors">Blog</Link>
            </div>
          </nav>
        </div>

        {/* Textos del Hero */}
        <div className="section-px flex flex-col justify-center flex-grow pt-8 pb-40 sm:pb-48 lg:pb-32">
          <div className="text-white" style={{ maxWidth: "clamp(280px, 50vw, 700px)" }}>

            {/* Título principal */}
            <h1
              className="monument flex flex-col"
              style={{
                fontSize: "clamp(32px, 5.5vw, 64px)",
                fontWeight: 800,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              <span>SÚMATE A</span>
              <span>LA PRÓXIMA</span>
              <span>FECHA</span>
            </h1>

            {/* Ciudad */}
            <div
              className="text-[#00f5c4] mt-2 mb-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
              style={{
                fontFamily: "Bagiqu, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(36px, 5.3vw, 60.73px)",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              CURICÓ
            </div>

            {/* Fecha */}
            <p
              className="monument text-white uppercase mb-6 md:mb-8"
              style={{ fontSize: "clamp(11px, 1.2vw, 18px)", letterSpacing: "0.12em" }}
            >
              DEL 13 AL 15 DE MARZO
            </p>

            {/* Botón */}
            <Link
              href="#"
              className="inline-block bg-[#00f5c4] text-[#111111] font-bold uppercase italic shadow-[0_0_15px_rgba(0,245,196,0.3)] hover:shadow-[0_0_25px_rgba(0,245,196,0.6)] transition-all"
              style={{
                transform: "skewX(-15deg)",
                padding: "clamp(8px,1vw,12px) clamp(20px,3vw,40px)",
                fontSize: "clamp(12px, 1vw, 16px)",
              }}
            >
              <span className="inline-block" style={{ transform: "skewX(15deg)" }}>VER MÁS</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── CAPA 3: Auto Frontal (Z-20) ─────────────────────────────────── */}

      {/* Desktop ≥1024px — posición y tamaño exacto Figma */}
      <div
        className="hidden lg:block absolute z-20 pointer-events-none"
        style={{ top: "257px", left: "653px", width: "502px", height: "270px" }}
      >
        <Image
          src={carFront}
          alt="Auto RallyMobil Salto"
          width={502}
          height={270}
          className="w-full h-full object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Tablet 640–1023px — escala 60% y reposicionado */}
      <div
        className="hidden sm:block lg:hidden absolute z-20 pointer-events-none"
        style={{ top: "clamp(160px,22vw,260px)", right: "0px", width: "clamp(260px,42vw,440px)", height: "auto" }}
      >
        <Image
          src={carFront}
          alt="Auto RallyMobil Salto"
          width={502}
          height={270}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Mobile <640px — auto centrado en la parte inferior del hero */}
      <div
        className="sm:hidden absolute z-20 pointer-events-none"
        style={{ bottom: "80px", left: "50%", transform: "translateX(-25%)", width: "clamp(240px,80vw,380px)", height: "auto" }}
      >
        <Image
          src={carFront}
          alt="Auto RallyMobil Salto"
          width={502}
          height={270}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

    </section>
  );
}
