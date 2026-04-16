import { AMENITIES } from "../../data/constants";

export default function Amenities() {
  return (
    <section
      style={{
        padding: "120px 60px",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
      }}
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
          World-Class Facilities
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-1px",
          }}
        >
          Resort{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Amenities</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {AMENITIES.map((a) => (
          <div
            key={a.label}
            className="amenity-card"
            style={{
              background: "rgba(255,255,255,0.02)",
              padding: "40px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 16 }}>{a.icon}</div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.7)",
              }}
            >
              {a.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
