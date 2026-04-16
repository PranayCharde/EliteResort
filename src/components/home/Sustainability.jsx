import { SUSTAINABILITY } from "../../data/constants";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      style={{
        padding: "140px 60px",
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr",
        gap: 100,
        alignItems: "center",
      }}
    >
      <div>
        <div className="divider" style={{ marginBottom: 24, justifyContent: "flex-start" }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            Green Luxury
          </span>
          <div style={{ width: 60, height: 1, background: "rgba(201,169,110,0.4)" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: 32,
            letterSpacing: "-0.5px",
          }}
        >
          Harmony with <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Nature</span>
        </h2>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            lineHeight: 2,
            color: "rgba(245,240,232,0.65)",
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          We believe that true luxury is sustainable. From our energy sources to our
          culinary ingredients, every aspect of Elite Resort is designed to respect
          and preserve the beautiful environment that surrounds us.
        </p>

        <button className="btn-solid">
          <span>Our Initiatives</span>
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 30,
        }}
      >
        {SUSTAINABILITY.map((item, index) => (
          <div
            key={index}
            className="amenity-card" // Reusing hover state
            style={{
              border: "1px solid rgba(201, 169, 110, 0.15)",
              padding: 40,
              textAlign: "center",
              position: "relative",
              background: "#0d0d0d",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: 20,
              }}
            >
              {item.icon}
            </div>

            <h3
              className="stat-number"
              style={{
                color: "#c9a96e",
                marginBottom: 12,
              }}
            >
              {item.stat}
            </h3>

            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#f5f0e8",
                marginBottom: 16,
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                lineHeight: 1.6,
                color: "rgba(245,240,232,0.5)",
                fontWeight: 300,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
