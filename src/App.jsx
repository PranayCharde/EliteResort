import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Spa from "./pages/Spa";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import "./index.css";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        background: "#0a0a0a",
        color: "#f5f0e8",
        overflowX: "hidden",
      }}
    >
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}


