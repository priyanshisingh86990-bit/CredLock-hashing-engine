import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmployerDashboard from "./pages/EmployerDashboard";
import IssueForm from "./pages/IssueForm";
import Verifier from "./pages/Verifier";
import Layout from "./components/Layout";
import EmployerProfile from "./pages/EmployerProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
          fontSize: "18px",
          fontWeight: "500"
        }}>
          <Link to="/">Employer Dashboard</Link>
          <Link to="/issue">Issue Credential</Link>
          <Link to="/verify">Verify Credential</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EmployerDashboard />} />
          <Route path="/issue" element={<IssueForm />} />
          <Route path="/verify" element={<Verifier />} />
          <Route path="/employer" element={<EmployerProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
