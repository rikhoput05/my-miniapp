import React, { useEffect } from "react"; 
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
