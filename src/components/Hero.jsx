export default function Hero() {
  return (
    <section
      style={{
        height: "55vh",
        background: `url("/credlock.png") center/contain no-repeat`, // ⭐ FIXED HERE
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.55)",
          padding: "28px 40px",
          borderRadius: "14px",
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ fontSize: "45px", fontWeight: "800", margin: 0 }}>
          CredLock
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginTop: "10px",
            fontStyle: "italic",
            opacity: 0.95,
          }}
        >
          “The trust layer for modern hiring.”
        </p>
      </div>
    </section>
  );
}
