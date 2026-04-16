import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.05)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: 900,
          padding: "0 40px",
        }}
      >
        <p
          className="hero-sub"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: 24,
          }}
        >
          Where Luxury Meets Eternity
        </p>

        <h1
          className="hero-title"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-2px",
            marginBottom: 32,
          }}
        >
          <span className="gold-shimmer">Elite</span>
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 300 }}>Resort</span>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            fontWeight: 300,
            letterSpacing: 2,
            color: "rgba(245,240,232,0.75)",
            maxWidth: 500,
            margin: "0 auto 48px",
            lineHeight: 2,
          }}
        >
          An unparalleled sanctuary of refinement, where every moment is
          crafted with supreme artistry.
        </p>

        <div
          className="hero-cta"
          style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link to="/rooms" className="btn-solid" style={{ textDecoration: "none" }}>
            <span>Explore Rooms</span>
          </Link>
          <Link to="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            <span>Reserve Your Stay</span>
          </Link>
        </div>
      </div>


      {/* Booking Bar */}
      <div
        className="hero-booking"
        style={{
          position: "absolute",
          bottom: 20,
          left: "20%",
          transform: "translateX(-50%)",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(201,169,110,0.3)",
          padding: "28px 40px",
          display: "flex",
          gap: 40,
          alignItems: "flex-end",
          flexWrap: "wrap",
          justifyContent: "center",
          minWidth: 700,
        }}
      >
        {[
          { label: "Check In", type: "date", value: checkIn, onChange: setCheckIn },
          { label: "Check Out", type: "date", value: checkOut, onChange: setCheckOut },
        ].map((field) => (
          <div key={field.label} style={{ minWidth: 140 }}>
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
              {field.label}
            </div>
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              style={{ colorScheme: "dark" }}
            />
          </div>
        ))}
        <div style={{ minWidth: 120 }}>
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
            Guests
          </div>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <button className="btn-solid" style={{ whiteSpace: "nowrap" }}>
          <span>Check Availability</span>
        </button>
      </div>

      {/* <div className="scroll-indicator">
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 8,
            letterSpacing: 3,
            color: "#c9a96e",
          }}
        >
          Scroll
        </div>
        <div className="scroll-line" style={{ height: 60 }} />
      </div> */}
    </section>
  );
}
