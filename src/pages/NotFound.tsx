import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8e0d0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "34rem",
          border: "1.5px solid #1a1410",
          backgroundColor: "rgba(255,255,255,0.35)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.12em" }}>
          404 / ARCHIVE ENTRY NOT FOUND
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 7vw, 4rem)", margin: "1rem 0" }}>
          Page Not Found
        </h1>
        <button
          type="button"
          onClick={() => setLocation("/")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "none",
            backgroundColor: "#0a1628",
            color: "white",
            padding: "0.75rem 1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          }}
        >
          <Home size={16} />
          Go Home
        </button>
      </main>
    </div>
  );
}
