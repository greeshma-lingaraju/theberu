import "@fontsource/comfortaa";
import "@fontsource/quicksand";
import "@fontsource/nunito/500.css";
import "@fontsource/playfair-display/500.css";
import { useEffect, useState } from "react";
import "./App.css";

const dots = ["", ".", "..", "..."];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % dots.length);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebddc6",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#ebddc6",
          padding: "1rem",
        }}
      ></div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Quicksand",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#8c638e",
            transform: "rotate(270deg)",
            transformOrigin: "center",
            marginRight: "-15px",
            letterSpacing: "0.08rem",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          THE
        </div>

        <div
          style={{
            fontFamily: "Comfortaa",
            fontWeight: 800,
            fontSize: "6rem",
            color: "#8c638e",
            lineHeight: 1,
          }}
        >
          bèru
        </div>
      </div>

      <div className="comingSoon">Our Story Begins Soon...</div>
    </div>
  );
}
