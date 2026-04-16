import { DINING } from "../../data/constants";

export default function Dining() {
  return (
    <section
      id="dining"
      style={{
        padding: "120px 60px",
        background: "#0d0d0d",
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
          Culinary Excellence
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-1px",
          }}
        >
          Dining{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Experiences</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {DINING.map((d) => (
          <div
            key={d.name}
            className="room-card"
            style={{
              position: "relative",
              overflow: "hidden",
              height: 460,
            }}
          >
            <img
              src={d.img}
              alt={d.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  marginBottom: 8,
                }}
              >
                {d.cuisine}
              </div>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  letterSpacing: 1,
                  marginBottom: 12,
                }}
              >
                {d.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  lineHeight: 1.9,
                  color: "rgba(245,240,232,0.65)",
                  marginBottom: 16,
                  fontWeight: 300,
                }}
              >
                {d.desc}
              </p>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: 2,
                  color: "rgba(201,169,110,0.7)",
                }}
              >
                {d.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
