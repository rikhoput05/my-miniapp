import { useEffect } from "react";
import { actions } from "@farcaster/miniapp-sdk";

function App() {
  useEffect(() => {
    actions.ready(); // Beri tahu Warpcast bahwa mini-app siap
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>👋 Halo dari Mini App!</h1>
      <p>Contoh integrasi dengan Farcaster Mini Apps SDK.</p>

      {/* Tombol buka website */}
      <button
        onClick={() => actions.openUrl("https://farcaster.xyz")}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#5b21b6",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "1rem",
          marginRight: "0.5rem",
        }}
      >
        🌐 Buka Farcaster
      </button>

      {/* Tombol buka composer */}
      <button
        onClick={() =>
          actions.openComposer({
            text: "Halo dari Mini App 🚀",
            embeds: ["https://farcaster.xyz"], // opsional
          })
        }
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#16a34a",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        ✍️ Buka Composer
      </button>
    </div>
  );
}

export default App;
