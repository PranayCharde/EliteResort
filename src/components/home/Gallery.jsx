import { useState } from "react";
import { GALLERY } from "../../data/constants";

export default function Gallery() {
  const [galleryHover, setGalleryHover] = useState(null);

  return (
    <section
      id="gallery"
      style={{ padding: "120px 60px", background: "#0a0a0a" }}
    >
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: 20,
          }}
        >
          Visual Journey
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-1px",
          }}
        >
          Resort{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Gallery</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 280px)",
          gap: 12,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {GALLERY.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              position: "relative",
              gridColumn: i === 0 ? "span 2" : i === 3 ? "span 2" : "span 1",
            }}
            onMouseEnter={() => setGalleryHover(i)}
            onMouseLeave={() => setGalleryHover(null)}
          >
            <img src={src} alt={`Gallery ${i + 1}`} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,10,10,0.4)",
                opacity: galleryHover === i ? 0 : 1,
                transition: "opacity 0.4s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
