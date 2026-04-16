import ContactComponent from "../components/home/Contact";

export default function Contact() {
  return (
    <div>
      <div
        style={{
          height: "40vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,10,10,0.6)",
          }}
        />
        <h1
          style={{
            position: "relative",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#f5f0e8",
          }}
        >
          Connect With Us
        </h1>
      </div>
      <ContactComponent />
    </div>
  );
}
