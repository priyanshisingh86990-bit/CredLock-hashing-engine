// src/pages/Verifier.jsx
import React, { useState } from "react";
import { getCreds } from "../utils/mockdata";
import { addEvent } from "../utils/auditLog";
import { useApp } from "../context/AppContext";
import { keccak256 } from "ethers";  // ⭐ new import

export default function Verifier() {
  const { user } = useApp();

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState("");

  // -----------------------------
  // VERIFY BY ID / TXHASH
  // -----------------------------
  function verifyById() {
    const list = getCreds();
    const cred = list.find(
      (c) => c.id === input.trim() || c.txHash === input.trim()
    );

    addEvent("verify", user || null, {
      method: "id",
      query: input,
      found: !!cred,
    });

    if (cred) {
      setResult({ status: "valid", cred });
    } else {
      setResult({ status: "notfound", query: input });
    }
  }

  // ------------------------------------
  // VERIFY BY FILE — BLOCKCHAIN HASH
  // ------------------------------------
  async function verifyByFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFileName(f.name);

    try {
      // ⭐ convert file → arrayBuffer → Uint8Array → keccak256
      const buf = await f.arrayBuffer();
      const uint8 = new Uint8Array(buf);

      const h = keccak256(uint8); // ⭐ BLOCKCHAIN HASH

      const list = getCreds();
      const cred = list.find((c) => c.manifest?.fileHash === h);

      addEvent("verify", user || null, {
        method: "file",
        fileName: f.name,
        fileHash: h,
        found: !!cred,
      });

      if (cred) {
        setResult({ status: "valid", cred });
      } else {
        setResult({ status: "notfound", fileHash: h });
      }
    } catch (err) {
      console.error("File verify error:", err);
    }
  }

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "40px auto",
        background: "white",
        padding: "28px",
        borderRadius: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Verify Credential</h2>

      {/* VERIFY BY ID */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Enter Credential ID or TxHash"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccd3e0",
            fontSize: "15px",
          }}
        />
        <button
          onClick={verifyById}
          style={{
            background: "#0f172a",
            color: "white",
            padding: "11px 18px",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Verify
        </button>
      </div>

      {/* VERIFY BY FILE */}
      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          color: "#555",
          fontSize: "14px",
        }}
      >
        OR upload certificate / mark-sheet:
      </div>

      <input
        type="file"
        onChange={verifyByFile}
        accept=".pdf,image/*"
        style={{
          width: "100%",
          background: "#f8f9fb",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccd3e0",
        }}
      />

      {fileName && (
        <div style={{ marginTop: "6px", fontSize: "13px", color: "#555" }}>
          Uploaded: {fileName}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div
          style={{
            marginTop: "25px",
            padding: "18px",
            borderRadius: "12px",
            background:
              result.status === "valid" ? "#e8ffe8" : "#ffeaea",
            boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
          }}
        >
          {result.status === "valid" ? (
            <>
              <h3 style={{ margin: 0, marginBottom: "6px" }}>
                ✅ Valid Credential
              </h3>
              <p style={{ margin: "4px 0" }}>
                <strong>Name:</strong>{" "}
                {result.cred.manifest.employeeName}
              </p>
              <p style={{ margin: "4px 0" }}>
                <strong>Role:</strong> {result.cred.manifest.role}
              </p>
              {result.cred.manifest.fileHash && (
                <p style={{ margin: "4px 0", fontSize: "13px" }}>
                  <strong>File Hash:</strong>{" "}
                  {result.cred.manifest.fileHash}
                </p>
              )}
              <p style={{ margin: "4px 0", fontSize: "13px" }}>
                <strong>TxHash:</strong> {result.cred.txHash}
              </p>
            </>
          ) : (
            <>
              <h3 style={{ margin: 0, marginBottom: "6px", color: "red" }}>
                ❌ Credential NOT FOUND
              </h3>

              {result.query && (
                <p>
                  Searched ID / TxHash: <b>{result.query}</b>
                </p>
              )}
              {result.fileHash && (
                <p style={{ fontSize: "13px" }}>
                  File Hash: <b>{result.fileHash}</b>
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
