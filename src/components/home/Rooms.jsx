import { useState } from "react";
import { ROOMS } from "../../data/constants";

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  return (
    <section
      id="rooms"
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
          Accommodations
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-1px",
          }}
        >
          Rooms &{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Suites</span>
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
        {ROOMS.map((room, i) => (
          <div
            key={room.name}
            className="room-card"
            style={{
              background: "#111",
              border: "1px solid rgba(201,169,110,0.15)",
              overflow: "hidden",
            }}
            onClick={() => setActiveRoom(i)}
          >
            <div style={{ overflow: "hidden", height: 280, position: "relative" }}>
              <img
                src={room.img}
                alt={room.name}
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
                  top: 20,
                  left: 20,
                  background: "#c9a96e",
                  color: "#0a0a0a",
                  padding: "6px 14px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 8,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {room.tag}
              </div>
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: 1,
                  }}
                >
                  {room.name}
                </h3>
                <div>
                  <span style={{ color: "#c9a96e", fontSize: 22, fontWeight: 300 }}>
                    {room.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9,
                      color: "rgba(245,240,232,0.4)",
                      display: "block",
                      textAlign: "right",
                      letterSpacing: 1,
                    }}
                  >
                    per night
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  lineHeight: 2,
                  color: "rgba(245,240,232,0.55)",
                  marginBottom: 24,
                  fontWeight: 300,
                }}
              >
                {room.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 28,
                  borderTop: "1px solid rgba(201,169,110,0.1)",
                  paddingTop: 20,
                }}
              >
                {[
                  { label: "Size", val: room.size },
                  { label: "Guests", val: room.guests },
                ].map((d) => (
                  <div key={d.label}>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 8,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#c9a96e",
                        marginBottom: 4,
                      }}
                    >
                      {d.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "rgba(245,240,232,0.7)",
                      }}
                    >
                      {d.val}
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                <span>View Details & Book</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
