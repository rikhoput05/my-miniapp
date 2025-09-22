import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [message, setMessage] = useState("");
  const [target] = useState(() => Math.floor(Math.random() * 10) + 1);

  const handleGuess = (guess: number) => {
    if (guess === target) {
      setMessage(`🎉 Benar! Angkanya ${target}`);
    } else {
      setMessage(`❌ Salah! Coba lagi.`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🎮 Tebak Angka (1-10)</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <Button key={i} label={(i + 1).toString()} onClick={() => handleGuess(i + 1)} />
        ))}
      </div>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default App;
