import Image from "next/image";

const noticias = [
  {
    id: 1,
    categoria: "Noticias",
    titulo: "Otra noticia un poco más importante.",
    fecha: "25 de Marzo",
    imagen: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    destacada: true,
  },
  {
    id: 2,
    categoria: "Noticias",
    titulo: "Auto de ayuda en todo momento del recorrido.",
    fecha: "6 de noviembre",
    imagen: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&q=80",
    destacada: false,
  },
  {
    id: 3,
    categoria: null,
    titulo: "Los campeones se re encuentran en el podio este",
    fecha: "20 de octubre",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    destacada: false,
  },
  {
    id: 4,
    categoria: null,
    titulo: "Biblioteca pública de Lanco inagura rincón infantil para la lectura",
    fecha: "5 de septiembre",
    imagen: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80",
    destacada: false,
  },
];

const noticiaDestacada = noticias.find((n) => n.destacada)!;
const noticiasSecundarias = noticias.filter((n) => !n.destacada);

function CategoriaBadge() {
  return (
    <span
      className="news-badge"
      style={{
        display: "inline-block",
        backgroundColor: "#E8344E",
        color: "#ffffff",
        fontFamily: "'M PLUS 1', Arial, sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: 1,
        padding: "6px 12px",
        borderRadius: "4px",
        whiteSpace: "nowrap",
      }}
    >
      Noticias
    </span>
  );
}

export default function NewsSection() {
  return (
    <section
      className="section-px"
      style={{
        backgroundColor: "#ffffff",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      {/* Wrapper con ancho máximo alineado con otras secciones */}
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>

        {/* Título */}
        <h2
          className="monument news-heading"
          style={{
            color: "#111111",
            fontWeight: 900,
            marginBottom: "40px",
          }}
        >
          News
        </h2>

        {/* Grid principal */}
        <div className="news-grid">

          {/* Card destacada — izquierda */}
          <a
            href="#"
            className="news-hero-card"
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              display: "block",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {/* Imagen de fondo */}
            <Image
              src={noticiaDestacada.imagen}
              alt={noticiaDestacada.titulo}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 560px"
            />

            {/* Overlay degradado inferior */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
                zIndex: 1,
              }}
            />

            {/* Contenido sobre la imagen */}
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                left: "28px",
                right: "28px",
                zIndex: 2,
              }}
            >
              <CategoriaBadge />
              <p
                style={{
                  color: "#ffffff",
                  fontFamily: "'M PLUS 1', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: "1.3",
                  margin: "12px 0 8px",
                }}
              >
                {noticiaDestacada.titulo}
              </p>
              <span
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'M PLUS 1', Arial, sans-serif",
                  fontSize: "13px",
                }}
              >
                {noticiaDestacada.fecha}
              </span>
            </div>
          </a>

          {/* Columna derecha — 3 noticias secundarias */}
          <div className="news-secondary-col">
            {noticiasSecundarias.map((noticia, idx) => (
              <a
                key={noticia.id}
                href="#"
                className="news-secondary-item"
                style={{
                  display: "flex",
                  gap: "20px",
                  textDecoration: "none",
                  paddingBottom: idx < noticiasSecundarias.length - 1 ? "28px" : 0,
                  borderBottom:
                    idx < noticiasSecundarias.length - 1
                      ? "1px solid #e8e8e8"
                      : "none",
                  marginBottom: idx < noticiasSecundarias.length - 1 ? "28px" : 0,
                }}
              >
                {/* Thumbnail */}
                <div
                  className="news-thumb"
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 639px) 120px, 260px"
                  />
                </div>

                {/* Texto */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                  {noticia.categoria && <CategoriaBadge />}
                  <p
                    style={{
                      color: "#111111",
                      fontFamily: "'M PLUS 1', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "1.35",
                      margin: 0,
                    }}
                  >
                    {noticia.titulo}
                  </p>
                  <span
                    style={{
                      color: "#888888",
                      fontFamily: "'M PLUS 1', Arial, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    {noticia.fecha}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
