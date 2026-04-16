import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "16px 60px" : "28px 60px",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none",
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 2 }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f5f0e8",
          }}
        >
          Elite
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 8,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c9a96e",
            marginTop: -2,
          }}
        >
          Resort & Spa
        </div>
      </Link>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            {link}
          </NavLink>
        ))}
      </div>

      {/* Book Now */}
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button className="btn-primary">
          <span>Book Now</span>
        </button>
      </Link>
    </nav>
  );
}

