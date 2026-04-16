export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        padding: "60px 60px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 60,
          marginBottom: 60,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: 4,
              color: "#f5f0e8",
              marginBottom: 6,
            }}
          >
            Elite Resort
          </div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 8,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: 20,
            }}
          >
            & Spa
          </div>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              lineHeight: 2,
              color: "rgba(245,240,232,0.4)",
              maxWidth: 300,
              fontWeight: 300,
            }}
          >
            Redefining luxury hospitality since 2009. Where every detail tells a story of excellence.
          </p>
        </div>

        {[
          {
            title: "Explore",
            links: ["Our Story", "Accommodations", "Dining", "Spa & Wellness", "Gallery"],
          },
          {
            title: "Experience",
            links: ["Water Sports", "Cultural Tours", "Private Events", "Weddings", "Corporate"],
          },
          {
            title: "Connect",
            links: ["Instagram", "Facebook", "Pinterest", "LinkedIn", "Press Kit"],
          },
        ].map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#c9a96e",
                marginBottom: 24,
              }}
            >
              {col.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    fontWeight: 300,
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#c9a96e")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(245,240,232,0.45)")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(201,169,110,0.1)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            color: "rgba(245,240,232,0.3)",
            letterSpacing: 1,
          }}
        >
          © 2024 Elite Resort & Spa. All rights reserved.
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            color: "rgba(201,169,110,0.5)",
            letterSpacing: 1,
          }}
        >
          Privacy Policy · Terms of Service · Cookie Policy
        </div>
      </div>
    </footer>
  );
}
