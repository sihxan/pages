import { Home } from "lucide-react";
import { useLocation } from "wouter";
import { LanguageToggle, text, useLanguage } from "@/lib/language";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

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
      <div style={{ position: "fixed", top: "1rem", right: "1rem" }}>
        <LanguageToggle variant="light" />
      </div>
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
          {text(language, "404 / ARCHIVE ENTRY NOT FOUND", "404 / 아카이브 항목을 찾을 수 없습니다")}
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 7vw, 4rem)", margin: "1rem 0" }}>
          {text(language, "Page Not Found", "페이지를 찾을 수 없습니다")}
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
          {text(language, "Go Home", "홈으로")}
        </button>
      </main>
    </div>
  );
}
