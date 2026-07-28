import "@fontsource/comfortaa";
import "@fontsource/quicksand";
import "@fontsource/nunito/500.css";
import "@fontsource/playfair-display/500.css";

const options = [
  { name: "Quicksand" },
  // { name: "Nunito", font: "Nunito" },
  // { name: "Playfair Display", font: "Playfair Display" },
];

export default function App() {
  return (
    // <div style={{ padding: "40px", background: "#f5ece5" }}>
    //   {options.map((o) => (
    //     <div
    //       key={o.name}
    //       style={{
    //         textAlign: "center",
    //         marginBottom: "60px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           fontFamily: "Comfortaa",
    //           fontWeight: 800,
    //           fontSize: "6rem",
    //           color: "#735592",
    //         }}
    //       >
    //         béru
    //       </div>

    //       <div
    //         style={{
    //           fontFamily: o.font,
    //           fontSize: "1.2rem",
    //           color: "#9782bc",
    //           marginTop: "-15px",
    //           letterSpacing: "0.2rem",
    //           fontWeight: 50,
    //         }}
    //       >
    //         Rooted Flavours
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#ebddc6",
        padding: "10rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#ebddc6",
          padding: "1rem",
        }}
      >
        {/* <div
          style={{
            fontFamily: "Quicksand",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#735592",
            transform: "rotate(270deg)",
            transformOrigin: "center",
            marginRight: "-12px",
            letterSpacing: "0.08rem",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          THE
        </div> */}
        {/* 
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
        </div> */}
      </div>
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
            fontWeight: 500,
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

      {/* <div
        style={{
          fontFamily: "Quicksand",
          fontSize: "1.1rem",
          fontWeight: 300,
          color: "#9782bc",
          letterSpacing: "0.28rem",
          marginTop: "-30px",
          marginLeft: "30px", // Move closer to the logo
          // textTransform: "uppercase", // Optional
        }}
      >
        Rooted Flavours
      </div> */}
    </div>
  );
}
