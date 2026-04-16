export default function Spa() {
  return (
    <section
      id="spa"
      style={{
        position: "relative",
        height: 700,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          // backgroundImage:
          //   "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,10,0.7)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 650,
          marginLeft: 120,
          padding: "0 40px",
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: 24,
          }}
        >
          Wellness & Restoration
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 28,
          }}
        >
          The Elite{" "}
          <span style={{ fontStyle: "italic", color: "#c9a96e" }}>
            Spa Sanctuary
          </span>
        </h2>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            lineHeight: 2.2,
            color: "rgba(245,240,232,0.7)",
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          Surrender to the art of healing. Our 3,000 m² spa sanctuary blends
          ancient wellness traditions with contemporary science, offering over
          80 bespoke treatments designed to restore harmony to your body, mind,
          and spirit.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          <button className="btn-solid">
            <span>Spa Menu</span>
          </button>
          <button className="btn-primary">
            <span>Book Treatment</span>
          </button>
        </div>
      </div>
    </section>
  );
}
