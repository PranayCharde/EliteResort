import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      style={{
        padding: "140px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 100,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "4/5",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: -40,
            width: "55%",
            aspectRatio: "1",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "8px solid #0a0a0a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: -20,
            background: "#c9a96e",
            color: "#0a0a0a",
            padding: "12px 20px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Est. 2009
        </div>
      </div>

      <div>
        <div className="divider" style={{ marginBottom: 32, justifyContent: "flex-start" }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            Our Story
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
          A Legacy of{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>
            Unrivaled
          </span>{" "}
          Luxury
        </h2>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            lineHeight: 2.2,
            color: "rgba(245,240,232,0.65)",
            marginBottom: 28,
            fontWeight: 300,
          }}
        >
          Nestled between pristine shores and lush tropical landscapes, Elite
          Resort has been synonymous with excellence since 2009. Our philosophy
          is simple: every guest deserves a transcendent experience crafted with
          impeccable attention to detail.
        </p>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            lineHeight: 2.2,
            color: "rgba(245,240,232,0.65)",
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          From the architecture to the cuisine, from the spa rituals to the
          personalized butler service — every element has been thoughtfully
          designed to create memories that last a lifetime.
        </p>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <button className="btn-primary">
            <span>Discover More</span>
          </button>
        </Link>
      </div>
    </section>
  );
}

