// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Header() {
  const { user, loginAs, logout } = useApp();

  return (
    <header style={{
      background: "#0f1724",
      color: "white",
      padding: "16px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 50
    }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>🔐 CRED-LOCK</div>
        <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
          <Link to="/issue" style={{ color: "white", textDecoration: "none" }}>Issue Credential</Link>
          <Link to="/verify" style={{ color: "white", textDecoration: "none" }}>Verify</Link>
          <Link to="/employer" style={{ color: "white", textDecoration: "none" }}>Employee</Link>
        </nav>
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {user ? (
          <>
            <div style={{ fontSize: 14, opacity: 0.9 }}>{user.name} ({user.role})</div>
            <button onClick={() => logout()} style={{ padding: "8px 12px", borderRadius: 8, border: "none", cursor:"pointer" }}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => loginAs("employer", "Employer Demo")} style={{ padding: "8px 12px", borderRadius: 8, border: "none", cursor:"pointer" }}>Login as Employee</button>
            <button onClick={() => loginAs("verifier", "Verifier Demo")} style={{ padding: "8px 12px", borderRadius: 8, border: "none", cursor:"pointer" }}>Login as Verifier</button>
          </>
        )}
      </div>
    </header>
  );
}
