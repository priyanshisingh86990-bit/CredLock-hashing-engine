// src/pages/EmployerDashboard.jsx

import React from "react";
import Hero from "../components/Hero";
import { getCreds, getOrgs } from "../utils/mockdata";
import { useApp } from "../context/AppContext";

export default function EmployerDashboard() {
  const creds = getCreds();
  const orgs = getOrgs();
  const { user } = useApp();

  return (
    <div>

      {/* ⭐ TOP BANNER (Image + Tagline) */}
      <Hero />

      {/* ⭐ MAIN CONTENT */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "5px" }}>
          Employer Dashboard
        </h2>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Welcome {user ? user.name : "Guest"}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "24px",
            marginTop: "10px",
          }}
        >
          {/* LEFT SIDE — Credentials Issued */}
          <div>
            <h3 style={{ marginBottom: "12px" }}>Issued Credentials</h3>

            {creds.length === 0 ? (
              <div
                style={{
                  padding: "18px",
                  background: "white",
                  borderRadius: "10px",
                  color: "#777",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
                }}
              >
                No credentials issued yet.
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "16px",
                }}
              >
                {creds.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      background: "white",
                      padding: "16px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#222",
                      }}
                    >
                      {c.manifest?.employeeName}
                    </div>

                    <div
                      style={{
                        color: "#444",
                        fontSize: "15px",
                        marginTop: "4px",
                      }}
                    >
                      {c.manifest?.role}
                    </div>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        marginTop: "10px",
                      }}
                    >
                      Status:{" "}
                      <span style={{ fontWeight: 600 }}>{c.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE — Employer Details */}
          <aside
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              height: "fit-content",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: "0" }}>Your Employer Info</h3>

            {orgs.length ? (
              <>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  {orgs[0].name}
                </div>

                <div style={{ marginTop: "6px", color: "#555" }}>
                  Website: {orgs[0].website}
                </div>

                <div style={{ marginTop: "6px", color: "#555" }}>
                  Contact: {orgs[0].contact}
                </div>
              </>
            ) : (
              <div style={{ color: "#777" }}>No employer details saved.</div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

