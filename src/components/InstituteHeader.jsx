// src/components/InstitutionHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function InstituteHeader() {
  const navigate = useNavigate();
  const { logout } = useApp();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "14px 26px",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* 🔒 LOCK ICON */}
      <div
        onClick={() => navigate("/")}
        style={{
          fontSize: "22px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        title="Go to Home"
      >
        🔒
      </div>

      {/* DASHBOARD */}
      <div
        onClick={() => navigate("/dashboard/institute")}
        style={{ cursor: "pointer", fontWeight: 600 }}
      >
        Institution Dashboard
      </div>

      {/* ISSUE CREDENTIAL */}
      <div
        onClick={() => navigate("/issue")}
        style={{ cursor: "pointer", fontWeight: 600 }}
      >
        Issue Credential
      </div>

      {/* PUSH RIGHT */}
      <div style={{ marginLeft: "auto" }}>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          style={{
            background: "#ef4444",
            border: "none",
            color: "white",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
