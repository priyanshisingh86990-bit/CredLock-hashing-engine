import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import IssueForm from "./pages/IssueForm";
import Verifier from "./pages/Verifier";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import InstituteDashboard from "./pages/InstituteDashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/signup/:role"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />

        <Route
          path="/login/:role"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route path="/dashboard/employer" element={<EmployerDashboard />} />
        <Route path="/issue" element={<IssueForm />} />
        <Route path="/verify" element={<Verifier />} />


        <Route
          path="/dashboard/candidate"
          element={
            <Layout>
              <CandidateDashboard />
            </Layout>
          }
        />

        <Route
          path="/dashboard/institute"
          element={
            <Layout>
              <InstituteDashboard />
            </Layout>
          }
        />

        <Route
          path="/issue"
          element={
            <Layout>
              <IssueForm />
            </Layout>
          }
        />

        <Route
          path="/verify"
          element={
            <Layout>
              <Verifier />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import EmployerDashboard from "./pages/EmployerDashboard";
// import IssueForm from "./pages/IssueForm";
// import Verifier from "./pages/Verifier";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* HOME */}
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Home />
//             </Layout>
//           }
//         />

//         {/* AUTH ROUTES */}
//         <Route
//           path="/signup/:role"
//           element={
//             <Layout>
//               <Signup />
//             </Layout>
//           }
//         />

//         <Route
//           path="/login/:role"
//           element={
//             <Layout>
//               <Login />
//             </Layout>
//           }
//         />

//         {/* EXISTING DASHBOARD */}
//         <Route
//           path="/dashboard"
//           element={
//             <Layout>
//               <EmployerDashboard />
//             </Layout>
//           }
//         />

//         {/* EXISTING PAGES */}
//         <Route
//           path="/issue"
//           element={
//             <Layout>
//               <IssueForm />
//             </Layout>
//           }
//         />

//         <Route
//           path="/verify"
//           element={
//             <Layout>
//               <Verifier />
//             </Layout>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
