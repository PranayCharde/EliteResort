import { useState } from "react";
import { FAQS } from "../../data/constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "140px 60px",
        background: "#0d0d0d", // Match experiences background
        color: "#f5f0e8",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="divider" style={{ marginBottom: 24, justifyContent: "center" }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            Ask Us Anything
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            textAlign: "center",
            marginBottom: 60,
            letterSpacing: "-0.5px",
          }}
        >
          Frequently Asked <span style={{ fontStyle: "italic", color: "#c9a96e" }}>Questions</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(201, 169, 110, 0.1)",
                  background: "#121212",
                  padding: "24px 32px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: isOpen ? "#c9a96e" : "#f5f0e8",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      color: "#c9a96e",
                      fontSize: "1.2rem",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    ↓
                  </span>
                </div>

                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    marginTop: isOpen ? 16 : 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
