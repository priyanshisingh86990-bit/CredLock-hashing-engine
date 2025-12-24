import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

export default function Login() {
  const { role } = useParams(); // employer | candidate | institution
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ ROLE BASED REDIRECT
      if (role === "employer") {
        navigate("/dashboard/employer");
      } else if (role === "candidate") {
        navigate("/dashboard/candidate");
      } else if (role === "institution") {
        navigate("/dashboard/institute");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "360px",
          background: "#0b1220",
          padding: "28px",
          borderRadius: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login as{" "}
          <span style={{ textTransform: "capitalize", color: "#38bdf8" }}>
            {role}
          </span>
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#38bdf8",
            color: "#020617",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "14px", fontSize: "14px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#38bdf8", cursor: "pointer" }}
            onClick={() => navigate(`/signup/${role}`)}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #334155",
  background: "#020617",
  color: "white",
};




// import { useState, useNavigate } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { useParams, useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";

// export default function Login() {
//   const { role } = useParams();
//   const navigate = useNavigate();

//   const roleTitle =
//     role === "employer"
//       ? "Employer"
//       : role === "candidate"
//       ? "Candidate"
//       : "Institution";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//     const handleLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;

//       // 🔥 Firestore se role nikaalo
//     const userDoc = await getDoc(doc(db, "users", user.uid));

//     if (!userDoc.exists()) {
//       alert("User data not found");
//       return;
//     }

//     const role = userDoc.data().role;

//     // 🔥 Redirect
//     navigate(`/dashboard/${role}`);
//   } catch (error) {
//     console.error(error);
//     alert(error.message);
//   }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <h2>Login as {roleTitle}</h2>

//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />

//         <button onClick={handleLogin}>Login</button>

//       </div>
//     </div>
//   );

// }

