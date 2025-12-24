import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { getCreds } from "../utils/mockdata";

export default function CandidateDashboard() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const creds = getCreds().filter(
    (c) => c.manifest?.employeeEmail === user?.email
  );
  
  async function handleLogout(){
    await logout();
    navigate("/");
  }

  const [profile, setProfile] = useState({
    name: user?.name || "Candidate Name",
    email: user?.email || "",
    role: "Software Engineer",
    currentCompany: "ABC Corp",
    previousCompany: "XYZ Ltd",
    photo: null,
  });

  function handleProfileChange(e) {
    const { name, value, files } = e.target;
    setProfile((p) => ({
      ...p,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  }

  function shareCredential(credId) {
    const link = `${window.location.origin}/share/${credId}`;
    navigator.clipboard.writeText(link);
    alert("Shareable link copied:\n" + link);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#0f172a)",
        color: "white",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "18px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          style={{ cursor: "pointer", fontSize: "22px" }}
          onClick={() => navigate("/")}
        >
          🔒 CredLock
        </span>

        <strong style={{ fontSize: "18px" }}>Candidate Dashboard</strong>

        <div style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
          <button onClick={() => alert("Select credential to share")}>
            Share Credential
          </button>
        </div>
      </header>

      {/* MAIN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: "30px",
          padding: "40px",
        }}
      >
        {/* PROFILE */}
        <div
          style={{
            background: "#020617",
            padding: "24px",
            borderRadius: "14px",
          }}
        >
          <h3>My Profile</h3>

          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <img
              src={
                profile.photo ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="profile"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
              }}
            />
            <input type="file" onChange={handleProfileChange} />
          </div>

          {[
            ["name", "Full Name"],
            ["email", "Email"],
            ["role", "Current Role"],
            ["currentCompany", "Current Company"],
            ["previousCompany", "Previous Company"],
          ].map(([key, label]) => (
            <input
              key={key}
              name={key}
              value={profile[key]}
              placeholder={label}
              onChange={handleProfileChange}
              style={inputStyle}
            />
          ))}
        </div>

        {/* CREDENTIALS */}
        <div>
          <h3>My Credentials</h3>

          {creds.length === 0 ? (
            <p>No credentials issued yet.</p>
          ) : (
            <div style={{ display: "grid", gap: "16px" }}>
              {creds.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: "#020617",
                    padding: "18px",
                    borderRadius: "12px",
                  }}
                >
                  <strong>{c.manifest.employeeName}</strong>
                  <p>{c.manifest.role}</p>
                  <small>TxHash: {c.txHash}</small>

                  <button
                    style={{ marginTop: "10px" }}
                    onClick={() => shareCredential(c.id)}
                  >
                    Share Credential
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #334155",
  background: "#020617",
  color: "white",
};
