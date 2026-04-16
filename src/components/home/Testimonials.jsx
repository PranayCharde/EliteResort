import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../../data/constants";

export default function Testimonials() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        padding: "120px 60px",
        background: "#111",
        textAlign: "center",
      }}
    >
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
        Guest Voices
      </p>
      <h2
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "-1px",
          marginBottom: 80,
        }}
      >
        What Our{" "}
        <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Guests</span>{" "}
        Say
      </h2>

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          className="testimonial-transition"
          key={testimonialIdx}
          style={{ animation: "fadeIn 0.5s ease" }}
        >
          <div
            style={{
              fontSize: 60,
              color: "#c9a96e",
              lineHeight: 0.5,
              marginBottom: 32,
              fontFamily: "serif",
              opacity: 0.6,
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: 48,
              letterSpacing: "0.3px",
            }}
          >
            {TESTIMONIALS[testimonialIdx].quote}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a96e, #a07840)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#0a0a0a",
              }}
            >
              {TESTIMONIALS[testimonialIdx].avatar}
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                {TESTIMONIALS[testimonialIdx].name}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  color: "#c9a96e",
                  letterSpacing: 1,
                  marginTop: 3,
                }}
              >
                {TESTIMONIALS[testimonialIdx].title}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 48,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setTestimonialIdx(i)}
              style={{
                width: i === testimonialIdx ? 32 : 8,
                height: 2,
                background: i === testimonialIdx ? "#c9a96e" : "rgba(201,169,110,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
