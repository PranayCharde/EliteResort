import RoomsComponent from "../components/home/Rooms";

export default function Rooms() {
  return (
    <div>
      {/* Page Header */}
      <div
        style={{
          height: "40vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80')",
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
          Accommodations
        </h1>
      </div>

      {/* Main Content */}
      <RoomsComponent />
    </div>
  );
}
