// src/pages/EmployerDashboard.jsx
import EmployerHeader from "../components/EmployerHeader";

export default function EmployerDashboard() {
  // FAKE DATA
  const stats = {
    issued: 18,
    verified: 14,
    pending: 4,
  };

  const issuedCreds = [
    { name: "Rahul Sharma", role: "Frontend Developer", status: "Verified" },
    { name: "Anjali Verma", role: "Data Analyst", status: "Pending" },
    { name: "Amit Singh", role: "Backend Engineer", status: "Verified" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#020617" }}>
      {/* HEADER */}
      <EmployerHeader />

      {/* BODY */}
      <div style={{ padding: "30px", color: "white" }}>
        <h2 style={{ marginBottom: "20px" }}>Welcome, Employer</h2>

        {/* STATS */}
        <div style={styles.statsGrid}>
          <StatCard title="Total Issued" value={stats.issued} />
          <StatCard title="Verified" value={stats.verified} />
          <StatCard title="Pending" value={stats.pending} />
        </div>

        {/* ISSUED LIST */}
        <h3 style={{ marginTop: "30px" }}>Issued Credentials</h3>

        <div style={styles.list}>
          {issuedCreds.map((c, i) => (
            <div key={i} style={styles.card}>
              <strong>{c.name}</strong>
              <div>{c.role}</div>
              <span>Status: {c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={styles.statCard}>
      <div style={{ fontSize: "14px", color: "#94a3b8" }}>{title}</div>
      <div style={{ fontSize: "26px", fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

const styles = {
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  statCard: {
    background: "#0b1220",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  list: {
    marginTop: "16px",
    display: "grid",
    gap: "14px",
  },
  card: {
    background: "#0b1220",
    padding: "16px",
    borderRadius: "10px",
  },
};
