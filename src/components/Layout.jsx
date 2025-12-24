import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* GLOBAL FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h3>CredLock</h3>
            <p>
              A blockchain-powered platform to eliminate credential fraud
              and enable instant, trusted verification.
            </p>
          </div>

          <div>
            <h4>Product</h4>
            <p>Credential Issuance</p>
            <p>Verification</p>
            <p>Blockchain Security</p>
          </div>

          <div>
            <h4>Use Cases</h4>
            <p>Hiring</p>
            <p>Education</p>
            <p>Background Verification</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Contact & Help</p>
            <p>FAQs</p>
            <p>Documentation</p>
          </div>

          <div>
            <h4>Team</h4>
            <p>Chain_Guardians</p>
          </div>
        </div>

        <p style={styles.copy}>
          © 2025 CredLock · Built by Team Chain_Guardians
        </p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  footer: {
    background: "#071D45",
    color: "#fff",
    padding: "60px 20px 30px",
  },

  footerGrid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
  },

  copy: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
    opacity: 0.8,
  },
};



// // src/components/Layout.jsx
// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "./Header";

// export default function Layout({ children }) {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: isHome
//           ? "linear-gradient(135deg, #0A2E73, #0F4CCB)"
//           : "#f5f7fa",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Header only on non-home pages */}
//       {!isHome && <Header />}

//       <main
//         style={{
//           flex: 1,
//           width: "100%",
//           margin: isHome ? 0 : "40px auto",
//           padding: isHome ? 0 : "20px",
//           maxWidth: isHome ? "100%" : "1200px",
//           background: "transparent",
//         }}
//       >
//         {children}
//       </main>
//     </div>
//   );
// }



// // src/components/Layout.jsx

// import React from "react";
// import Header from "./Header";

// export default function Layout({ children }) {
//   return (
//     <div
//       style={{
//         fontFamily: "Inter, sans-serif",
//         minHeight: "100vh",
//         background: "#f5f7fa",
//         margin: 0,
//         padding: 0,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* HEADER */}
//       <Header />

//       {/* BODY */}
//       <main
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           margin: "40px auto",
//           padding: "20px",
//           background: "white",
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         }}
//       >
//         {children}
//       </main>
//     </div>
//   );
// }
