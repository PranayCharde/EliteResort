import { OFFERS } from "../../data/constants";

export default function Offers() {
  return (
    <section
      id="offers"
      style={{
        padding: "140px 60px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div className="divider" style={{ marginBottom: 24, justifyContent: "center" }}>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c9a96e",
          }}
        >
          Exclusive Offers
        </span>
      </div>

      <h2
        style={{
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          fontWeight: 300,
          textAlign: "center",
          marginBottom: 60,
          letterSpacing: "-0.5px",
        }}
      >
        Bespoke <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Packages</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 40,
        }}
      >
        {OFFERS.map((offer, index) => (
          <div
            key={index}
            className="room-card" // Reusing room-card hover effect
            style={{
              position: "relative",
              borderRadius: 0,
              overflow: "hidden",
              border: "1px solid rgba(201, 169, 110, 0.15)",
              background: "#121212",
            }}
          >
            <div style={{ overflow: "hidden", aspectRatio: "16/10" }}>
              <img
                src={offer.img}
                alt={offer.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: 32 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    background: "rgba(201, 169, 110, 0.1)",
                    padding: "4px 8px",
                  }}
                >
                  {offer.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    color: "rgba(245,240,232,0.6)",
                  }}
                >
                  {offer.discount}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  marginBottom: 16,
                  color: "#f5f0e8",
                }}
              >
                {offer.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.6)",
                  marginBottom: 24,
                  minHeight: 70,
                }}
              >
                {offer.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid rgba(201, 169, 110, 0.1)",
                  paddingTop: 20,
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    color: "#c9a96e",
                  }}
                >
                  {offer.price}
                </span>
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#c9a96e",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Book Now <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
