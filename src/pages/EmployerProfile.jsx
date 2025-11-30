import React, { useState } from "react";
import { getOrgs, upsertOrg } from "../utils/mockdata";

export default function EmployerProfile() {
  const initial = getOrgs()[0] || {
    id: "org_" + Date.now(),
    name: "",
    website: "",
    contact: "",
    address: "",
    description: "",
  };

  const [org, setOrg] = useState(initial);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    upsertOrg(org);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Employee Profile</h2>
      <p style={{ color: "#6b7280", marginBottom: "25px" }}>
        Update your company information
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Company Name */}
        <div>
          <label style={labelStyle}>Company Name</label>
          <input
            style={inputStyle}
            value={org.name}
            onChange={(e) => setOrg({ ...org, name: e.target.value })}
            placeholder="Enter company name"
          />
        </div>

        {/* Website */}
        <div>
          <label style={labelStyle}>Website</label>
          <input
            style={inputStyle}
            value={org.website}
            onChange={(e) => setOrg({ ...org, website: e.target.value })}
            placeholder="https://example.com"
          />
        </div>

        {/* Contact */}
        <div>
          <label style={labelStyle}>Contact Email / Phone</label>
          <input
            style={inputStyle}
            value={org.contact}
            onChange={(e) => setOrg({ ...org, contact: e.target.value })}
            placeholder="hr@example.com"
          />
        </div>

        {/* Address */}
        <div>
          <label style={labelStyle}>Address</label>
          <input
            style={inputStyle}
            value={org.address}
            onChange={(e) => setOrg({ ...org, address: e.target.value })}
            placeholder="Company address"
          />
        </div>

        {/* Description */}
        <div>
          <label style={labelStyle}>Company Description</label>
          <textarea
            style={{
              ...inputStyle,
              height: "120px",
              resize: "none",
            }}
            value={org.description}
            onChange={(e) => setOrg({ ...org, description: e.target.value })}
            placeholder="Brief about the company"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            background: "#0f172a",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Save Profile
        </button>

        {saved && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              background: "#e7ffe7",
              borderRadius: "10px",
              textAlign: "center",
              color: "#0f7b0f",
            }}
          >
            ✔ Saved Successfully!
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  color: "#374151",
  fontWeight: 600,
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  outline: "none",
  background: "#f9fafb",
};
