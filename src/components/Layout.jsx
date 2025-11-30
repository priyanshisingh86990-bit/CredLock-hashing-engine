// src/components/Layout.jsx

import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
        background: "#f5f7fa",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Header />

      {/* BODY */}
      <main
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
