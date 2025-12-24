import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./auth.css";

export default function Signup() {
  console.log("Signup page loaded");

  // 🔥 ROLE URL SE AAYEGA
  const { role } = useParams();
  const navigate = useNavigate();
  const roleTitle =
    role === "employer"
      ? "Employer"
      : role === "candidate"
      ? "Candidate"
      : "Institution";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    // ✅ REDIRECT LOGIC
    if (role === "employer") {
      navigate("/dashboard/employer");
    } else if (role === "candidate") {
      navigate("/dashboard/candidate");
    } else if (role === "institution") {
      navigate("/dashboard/institute");
    }

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already registered. Please login.");
    } else {
      alert(error.message);
    }
  }
  if (error.code === "auth/email-already-in-use") {
  alert("Email already registered. Please login.");
  navigate(`/login/${role}`);
}


};


  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up as {roleTitle}</h2>

        <input type="text" placeholder="Full Name"  />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter 8 charecter strong password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        

        <button onClick={handleSignup}>Sign Up</button>

        
      </div>
    </div>
  );
}



// import { doc, setDoc } from "firebase/firestore";
// import { db, auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default function Signup({ role }) {
//   const { role } = useParams(); // 👈 employer/candidate/institution
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//       const handleSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;

//       // 🔥 ROLE STORE
//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         role: role,
//         createdAt: new Date(),
//       });

//       // 🔀 Redirect
//       if (role === "employer") navigate("/employer-dashboard");
//       if (role === "candidate") navigate("/candidate-dashboard");
//       if (role === "institution") navigate("/institution-dashboard");

//     } catch (error) {
//       alert(error.message);
//     }
//   };


//   return (
//   <div>
//     <h2>Sign Up as {role}</h2>

//     <input
//       type="email"
//       placeholder="Email"
//       onChange={(e) => setEmail(e.target.value)}
//     />

//     <input
//       type="password"
//       placeholder="Password"
//       onChange={(e) => setPassword(e.target.value)}
//     />

//     <button onClick={handleSignup}>Sign Up</button>
//   </div>
// );

// }
