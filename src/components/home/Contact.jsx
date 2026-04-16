export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 60px",
        background: "#0a0a0a",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 100,
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div>
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
          Get In Touch
        </p>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "-1px",
            marginBottom: 36,
            lineHeight: 1.2,
          }}
        >
          Begin Your{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>
            Elite
          </span>{" "}
          Experience
        </h2>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            lineHeight: 2.2,
            color: "rgba(245,240,232,0.6)",
            marginBottom: 60,
            fontWeight: 300,
          }}
        >
          Our guest relations team is available around the clock to curate
          your perfect stay. Every inquiry receives our personal attention
          within the hour.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            { icon: "📍", label: "Location", val: "12 Oceanfront Drive, Maldives" },
            { icon: "✉️", label: "Email", val: "reservations@eliteresort.com" },
            { icon: "📞", label: "Phone", val: "+1 (800) ELITE-RES" },
          ].map((c) => (
            <div key={c.label} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 8,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    marginBottom: 6,
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.7)",
                  }}
                >
                  {c.val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#111",
          border: "1px solid rgba(201,169,110,0.15)",
          padding: "52px 44px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            { label: "Full Name", placeholder: "Your name", type: "text" },
            { label: "Email Address", placeholder: "your@email.com", type: "email" },
            { label: "Phone Number", placeholder: "+1 (000) 000-0000", type: "tel" },
          ].map((f) => (
            <div key={f.label}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 8,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  marginBottom: 12,
                }}
              >
                {f.label}
              </div>
              <input type={f.type} placeholder={f.placeholder} />
            </div>
          ))}

          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 8,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#c9a96e",
                marginBottom: 12,
              }}
            >
              Special Requests
            </div>
            <textarea
              placeholder="Tell us how we can make your stay extraordinary..."
              style={{
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.2)",
                color: "#f5f0e8",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                padding: "12px 16px",
                width: "100%",
                resize: "vertical",
                minHeight: 100,
                outline: "none",
                letterSpacing: 0.5,
              }}
            />
          </div>

          <button className="btn-solid" style={{ width: "100%", padding: "18px" }}>
            <span>Send Inquiry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
