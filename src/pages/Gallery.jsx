import GalleryComponent from "../components/home/Gallery";

export default function Gallery() {
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
            "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80')",
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
          Visual Journey
        </h1>
      </div>
      <div style={{ padding: "60px 0" }}>
        <GalleryComponent />
      </div>
    </div>
  );
}
