import { EXPERIENCES } from "../../data/constants";

export default function Experiences() {
  return (
    <section
      id="experiences"
      style={{
        padding: "140px 60px",
        background: "#0d0d0d", // Slightly lighter than black
        color: "#f5f0e8",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
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
            Curated Experiences
          </span>
          <div style={{ width: 60, height: 1, background: "rgba(201,169,110,0.4)" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: 60,
            letterSpacing: "-0.5px",
          }}
        >
          Discover the{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Extraordinary</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: 80,
                alignItems: "center",
                flexDirection: index % 2 === 1 ? "row-reverse" : "row", // Doesn't work in grid easily without order
              }}
            >
              <div
                style={{
                  order: index % 2 === 1 ? 2 : 1,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                  <img
                    src={exp.img}
                    alt={exp.name}
                    className="gallery-item" // Reusing hover scale
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  {exp.category} • {exp.duration}
                </span>

                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: 300,
                    marginBottom: 24,
                    color: "#f5f0e8",
                  }}
                >
                  {exp.name}
                </h3>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    lineHeight: 2,
                    color: "rgba(245,240,232,0.65)",
                    marginBottom: 40,
                    fontWeight: 300,
                  }}
                >
                  {exp.desc}
                </p>

                <button className="btn-primary">
                  <span>Explore Activity</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
