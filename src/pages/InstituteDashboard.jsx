// src/pages/InstitutionDashboard.jsx
// src/pages/InstitutionDashboard.jsx
import React from "react";
import InstituteHeader from "../components/InstituteHeader";

export default function InstituteDashboard() {
  // ✅ FAKE DATA
  const institute = {
    name: "ABC Institute of Technology",
    website: "https://abcinstitute.edu",
    contact: "contact@abcinstitute.edu",
    location: "Bhopal, India",
  };

  const stats = [
    { label: "Credentials Issued", value: 1240 },
    { label: "Verified in Market", value: 980 },
    { label: "Pending Verification", value: 260 },
  ];

  const recentCredentials = [
    {
      name: "Julie Anderson",
      course: "B.Tech Computer Science",
      year: "2024",
      status: "Verified",
    },
    {
      name: "Rahul Sharma",
      course: "MBA",
      year: "2023",
      status: "Verified",
    },
    {
      name: "Ananya Verma",
      course: "BCA",
      year: "2024",
      status: "Pending",
    },
  ];

  return (
    <>
      <InstituteHeader />

      {/* MAIN CONTENT */}
      <div
        style={{
          padding: "32px",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          minHeight: "calc(100vh - 80px)",
          color: "white",
        }}
      >
        {/* INSTITUTE INFO */}
        <div
          style={{
            background: "#020617",
            padding: "22px",
            borderRadius: "14px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <h2 style={{ marginBottom: "6px" }}>{institute.name}</h2>
          <p style={{ margin: "4px 0", color: "#cbd5f5" }}>
            🌐 {institute.website}
          </p>
          <p style={{ margin: "4px 0", color: "#cbd5f5" }}>
            📧 {institute.contact}
          </p>
          <p style={{ margin: "4px 0", color: "#cbd5f5" }}>
            📍 {institute.location}
          </p>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "34px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#020617",
                padding: "20px",
                borderRadius: "14px",
                textAlign: "center",
                boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
              }}
            >
              <h3 style={{ fontSize: "28px", margin: 0 }}>{s.value}</h3>
              <p style={{ color: "#94a3b8", marginTop: "6px" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* RECENT CREDENTIALS */}
        <div
          style={{
            background: "#020617",
            padding: "24px",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>
            Recently Issued Credentials
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "#e5e7eb",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #1e293b" }}>
                <th align="left">Student</th>
                <th align="left">Course</th>
                <th align="left">Year</th>
                <th align="left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentCredentials.map((c, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td>{c.name}</td>
                  <td>{c.course}</td>
                  <td>{c.year}</td>
                  <td
                    style={{
                      color:
                        c.status === "Verified" ? "#22c55e" : "#facc15",
                    }}
                  >
                    {c.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          background: "#020617",
          color: "#94a3b8",
          padding: "26px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "white", marginBottom: "6px" }}>CredLock</h3>
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>
          The trust layer for modern hiring.
        </p>

        <div style={{ fontSize: "13px" }}>
          Product • Credential Issuance • Verification • Blockchain Security
        </div>

        <div style={{ marginTop: "10px", fontSize: "12px" }}>
          © 2025 CredLock — Built for Hackathons
        </div>
      </footer>
    </>
  );
}


// import React from "react";
// import InstituteHeader from "../components/InstituteHeader";

// export default function InstituteDashboard() {
//   const institute = {
//     name: "ABC Institute of Technology",
//     website: "www.abcinstitute.edu",
//     contact: "contact@abcinstitute.edu",
//   };

//   const stats = [
//     { label: "Students Registered", value: 1240 },
//     { label: "Credentials Issued", value: 980 },
//     { label: "Credentials Verified", value: 760 },
//     { label: "Credentials Shared", value: 430 },
//   ];

//   const recent = [
//     { name: "Rahul Sharma", type: "Degree", status: "Issued" },
//     { name: "Pooja Verma", type: "Marksheet", status: "Verified" },
//     { name: "Aman Khan", type: "Certificate", status: "Issued" },
//   ];

//   return (
//     <div style={{ padding: "30px" }}>
//       <InstituteHeader/>
//       {/* INSTITUTE INFO */}
//       <div style={{ marginBottom: "30px" }}>
//         <h1>{institute.name}</h1>
//         <p>🌐 {institute.website}</p>
//         <p>📧 {institute.contact}</p>
//       </div>

//       {/* STATS */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "20px",
//           marginBottom: "40px",
//         }}
//       >
//         {stats.map((s, i) => (
//           <div
//             key={i}
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//             }}
//           >
//             <h2>{s.value}</h2>
//             <p style={{ color: "#555" }}>{s.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* GRAPH PLACEHOLDER */}
//       <div
//         style={{
//           background: "white",
//           padding: "25px",
//           borderRadius: "12px",
//           marginBottom: "40px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         }}
//       >
//         <h3>Credential Issuance Overview</h3>
//         <p style={{ color: "#777" }}>
//           (Graph placeholder – Bar / Line chart here)
//         </p>

//         <div
//           style={{
//             height: "150px",
//             background: "#eef2ff",
//             borderRadius: "10px",
//             marginTop: "15px",
//           }}
//         />
//       </div>

//       {/* RECENT ACTIVITY */}
//       <div
//         style={{
//           background: "white",
//           padding: "25px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         }}
//       >
//         <h3>Recent Credential Activity</h3>

//         <table style={{ width: "100%", marginTop: "15px" }}>
//           <thead>
//             <tr style={{ textAlign: "left", color: "#555" }}>
//               <th>Student</th>
//               <th>Credential</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recent.map((r, i) => (
//               <tr key={i}>
//                 <td>{r.name}</td>
//                 <td>{r.type}</td>
//                 <td>{r.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
