import { useNavigate } from "react-router-dom";

export default function EmployerHeader() {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      {/* LEFT MENU */}
      <div style={styles.left}>
        <div
          style={styles.logo}
          onClick={() => navigate("/")}
          title="Go to Home"
        >
          🔐
        </div>

        <span style={styles.link} onClick={() => navigate("/dashboard/employer")}>
          Employer Dashboard
        </span>

        <span style={styles.link} onClick={() => navigate("/issue")}>
          Issue New Credential
        </span>

        <span style={styles.link} onClick={() => navigate("/verify")}>
          Verify Credential
        </span>
      </div>
    </div>
  );
}

const styles = {
  header: {
    height: "60px",
    background: "#020617",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    borderBottom: "1px solid #1e293b",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },
  logo: {
    fontSize: "22px",
    cursor: "pointer",
  },
  link: {
    cursor: "pointer",
    fontWeight: 500,
    color: "#e5e7eb",
  },
};
