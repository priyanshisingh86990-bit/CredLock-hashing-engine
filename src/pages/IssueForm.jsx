// src/pages/IssueForm.jsx
import React, { useState } from "react";
import { computeFileHash } from "../utils/fileHash";
import { issueCredentialFlow } from "../utils/issueFlow";
import { useApp } from "../context/AppContext";

export default function IssueForm() {
  const { user } = useApp();
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [role, setRole] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [file, setFile] = useState(null);
  const [fileHash, setFileHash] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function onFileChange(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setFileHash(null);
    try {
      const h = await computeFileHash(f);
      setFileHash(h);
    } catch (err) {
      console.error("hash error", err);
    }
  }

  async function handleIssue(e) {
    e.preventDefault();
    setLoading(true);
    const manifest = { employeeName, employeeId, role, start, end, proofFileName: file?.name || null, fileHash: fileHash || null };
    const res = await issueCredentialFlow(manifest, user || { id: "anon", name: "anon" });
    setResult(res);
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", background: "white", padding: 24, borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}>
      <h2>Issue Credential</h2>
      <form onSubmit={handleIssue} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input placeholder="Employee name" value={employeeName} onChange={e=>setEmployeeName(e.target.value)} required style={inputStyle} />
        <input placeholder="Employee ID" value={employeeId} onChange={e=>setEmployeeId(e.target.value)} required style={inputStyle} />
        <input placeholder="Role" value={role} onChange={e=>setRole(e.target.value)} required style={inputStyle} />
        <div style={{ display: "flex", gap: 8 }}>
          <input type="date" value={start} onChange={e=>setStart(e.target.value)} style={{...inputStyle, flex:1}} />
          <input type="date" value={end} onChange={e=>setEnd(e.target.value)} style={{...inputStyle, flex:1}} />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#444" }}>Upload certificate / mark-sheet (optional)</label>
          <input type="file" onChange={onFileChange} accept=".pdf,image/*" style={{ marginTop: 8 }} />
          {fileHash && <div style={{ marginTop: 8, fontSize: 13, color: "#333" }}>File hash: <code style={{background:"#f2f2f2",padding:"2px 6px",borderRadius:6}}>{fileHash}</code></div>}
        </div>

        <button disabled={loading} style={{ padding: "10px 14px", background:"#0f172a", color:"white", borderRadius:8, border:"none", cursor:"pointer" }}>
          {loading ? "Issuing..." : "Issue Credential"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 16, padding: 12, background: "#eef2ff", borderRadius: 8 }}>
          <div><strong>Issued</strong></div>
          <div>Credential ID: {result.credId}</div>
          <div>IPFS: {result.ipfs}</div>
          <div>TxHash: {result.txHash}</div>
        </div>
      )}
    </div>
  );
}

const inputStyle = { padding: "10px 12px", borderRadius: 8, border: "1px solid #d1d5db" };



// src/pages/IssueForm.jsx
// import React, { useState } from "react";
// import { issueCredentialFlow } from "../utils/issueFlow";
// import { useApp } from "../context/AppContext";

// export default function IssueForm() {
//   const { user } = useApp();

//   const [employeeName, setEmployeeName] = useState("");
//   const [employeeId, setEmployeeId] = useState("");
//   const [role, setRole] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   async function handleIssue(e) {
//     e.preventDefault();
//     setLoading(true);

//     const manifest = {
//       employeeName,
//       employeeId,
//       role,
//       start,
//       end,
//       proof: "demo.pdf",
//     };

//     const res = await issueCredentialFlow(manifest, user?.id || "anon");
//     setResult(res);

//     setLoading(false);
//   }

//   return (
//     <div
//       style={{
//         maxWidth: "640px",
//         margin: "40px auto",
//         background: "white",
//         padding: "28px",
//         borderRadius: "14px",
//         boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//       }}
//     >
//       <h2 style={{ marginBottom: "18px" }}>Issue Credential</h2>

//       <form
//         onSubmit={handleIssue}
//         style={{ display: "flex", flexDirection: "column", gap: "14px" }}
//       >
//         <input
//           placeholder="Employee Name"
//           value={employeeName}
//           onChange={(e) => setEmployeeName(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <input
//           placeholder="Employee ID"
//           value={employeeId}
//           onChange={(e) => setEmployeeId(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <input
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <div style={{ display: "flex", gap: "12px" }}>
//           <input
//             type="date"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             style={inputStyle}
//           />
//           <input
//             type="date"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             style={inputStyle}
//           />
//         </div>

//         <button
//           disabled={loading}
//           style={{
//             background: "#0f172a",
//             color: "white",
//             border: "none",
//             padding: "12px",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontSize: "15px",
//           }}
//         >
//           {loading ? "Issuing..." : "Issue Credential"}
//         </button>
//       </form>

//       {result && (
//         <div
//           style={{
//             marginTop: "20px",
//             background: "#f0f4ff",
//             padding: "14px",
//             borderRadius: "10px",
//             fontSize: "14px",
//           }}
//         >
//           <div>
//             <strong>Credential ID:</strong> {result.credId}
//           </div>
//           <div>
//             <strong>IPFS Hash:</strong> {result.ipfs}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const inputStyle = {
//   padding: "12px 14px",
//   borderRadius: "10px",
//   border: "1px solid #ccd3e0",
//   fontSize: "15px",
//   outline: "none",
// };
