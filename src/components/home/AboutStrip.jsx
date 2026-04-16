export default function AboutStrip() {
  return (
    <section
      style={{
        background: "#111",
        padding: "80px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 40,
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      {[
        { num: "25+", label: "Luxury Suites" },
        { num: "3", label: "Fine Dining Venues" },
        { num: "98%", label: "Guest Satisfaction" },
        { num: "15", label: "Years of Excellence" },
      ].map((stat) => (
        <div key={stat.label} style={{ textAlign: "center" }}>
          <div className="stat-number gold-shimmer">{stat.num}</div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.5)",
              marginTop: 12,
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
