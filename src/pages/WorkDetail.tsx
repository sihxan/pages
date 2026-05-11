/* ============================================================
   WorkDetail.tsx — Individual work/project detail page
   Design: "실험실 노트" — 과학적 아카이브 미학
   Static GitHub Pages version
   ============================================================ */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Tag, Users } from "lucide-react";
import {
  fallbackPerson,
  fallbackWorks,
} from "@/lib/fallbackPortfolio";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const work = fallbackWorks.find((item) => item.slug === slug) ?? null;
  const allWorks = fallbackWorks;
  const person = fallbackPerson;

  if (!work) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#e8e0d0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#1a1410" }}>
          Work not found.
        </p>
        <Link href="/">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#1a3a8f",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={13} /> Back to home
          </span>
        </Link>
      </div>
    );
  }

  const currentIndex = (allWorks as any[]).findIndex((w: any) => w.slug === slug);
  const prevWork = currentIndex > 0 ? (allWorks as any[])[currentIndex - 1] : null;
  const nextWork = currentIndex < (allWorks as any[]).length - 1 ? (allWorks as any[])[currentIndex + 1] : null;

  const highlights = Array.isArray((work as any).highlights) ? (work as any).highlights as string[] : [];
  const keywords = Array.isArray((work as any).keywords) ? (work as any).keywords as string[] : [];
  const nameEn = person?.nameEn || "Kim Sihwan";
  const lab = person?.lab || "KDST Lab";
  const nameParts = nameEn.split(" ");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e8e0d0" }}>
      {/* Top nav bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(10,22,40,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "0.85rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "white")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.65)")}
          >
            <ArrowLeft size={12} />
            {nameParts[0]?.toLowerCase()} {nameParts[1]?.toLowerCase()}
          </span>
        </Link>

        <Link href="/works">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.5)")}
          >
            ALL WORKS
          </span>
        </Link>
      </header>

      {/* Hero image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(280px, 45vh, 520px)",
          overflow: "hidden",
          backgroundColor: "#0a1628",
        }}
      >
        <img
          src={(work as any).img}
          alt={(work as any).title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.65) 100%)",
          }}
        />
        {/* Number badge */}
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "2rem",
            backgroundColor: "#1a3a8f",
            color: "white",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.2rem 0.6rem",
            letterSpacing: "0.06em",
          }}
        >
          {(work as any).displayId}
        </div>
        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "2rem",
            backgroundColor:
              (work as any).status === "In Progress"
                ? "#27ae60"
                : (work as any).status === "Ongoing"
                ? "#d4a017"
                : "rgba(255,255,255,0.15)",
            color: "white",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            fontWeight: 500,
            padding: "0.18rem 0.55rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {(work as any).status}
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "3rem 2rem 5rem",
        }}
      >
        {/* Title block */}
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: (work as any).tagColor,
              color: (work as any).tagTextColor,
              border: (work as any).tagBorder || "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              padding: "0.15rem 0.5rem",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {(work as any).tag}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1a1410",
              lineHeight: 1.2,
              marginBottom: "0.6rem",
              letterSpacing: "-0.02em",
            }}
          >
            {(work as any).title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.88rem",
              color: "#3a3028",
              lineHeight: 1.6,
              opacity: 0.75,
            }}
          >
            {(work as any).subtitle}
          </p>
        </div>

        {/* Meta info row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            padding: "1.25rem 0",
            borderTop: "1px solid rgba(26,20,16,0.12)",
            borderBottom: "1px solid rgba(26,20,16,0.12)",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Calendar size={13} style={{ color: "#1a3a8f", opacity: 0.7 }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#3a3028",
                letterSpacing: "0.04em",
              }}
            >
              {(work as any).date}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Tag size={13} style={{ color: "#1a3a8f", opacity: 0.7 }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#3a3028",
                letterSpacing: "0.04em",
              }}
            >
              {(work as any).area}
            </span>
          </div>
          {(work as any).collab && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Users size={13} style={{ color: "#1a3a8f", opacity: 0.7 }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "#3a3028",
                  letterSpacing: "0.04em",
                }}
              >
                {(work as any).collab}
              </span>
            </div>
          )}
        </div>

        {/* Two-column layout: description + highlights */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          {/* Long description */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1a1410",
                opacity: 0.45,
                marginBottom: "1rem",
              }}
            >
              OVERVIEW
            </h2>
            {((work as any).longDesc || "").split("\n\n").map((para: string, i: number) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#1a1410",
                  lineHeight: 1.9,
                  marginBottom: "1rem",
                  opacity: 0.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1a1410",
                opacity: 0.45,
                marginBottom: "1rem",
              }}
            >
              KEY POINTS
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {highlights.map((h: string, i: number) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "#1a1410",
                    lineHeight: 1.6,
                    paddingBottom: "0.65rem",
                    marginBottom: "0.65rem",
                    borderBottom: "1px solid rgba(26,20,16,0.08)",
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#1a3a8f",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    →
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Keywords */}
            <div style={{ marginTop: "1.5rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1a1410",
                  opacity: 0.45,
                  marginBottom: "0.75rem",
                }}
              >
                KEYWORDS
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {keywords.map((kw: string) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#1a3a8f",
                      border: "1px solid rgba(26,58,143,0.35)",
                      padding: "0.12rem 0.5rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Researcher note */}
        <div
          className="reveal"
          style={{
            backgroundColor: "#0a1628",
            padding: "2rem 2.5rem",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            RESEARCHER NOTE
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85,
              fontStyle: "italic",
            }}
          >
            "{(work as any).desc}"
          </p>
          <div
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.06em",
            }}
          >
            — {nameEn}, {lab}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            borderTop: "1px solid rgba(26,20,16,0.12)",
            paddingTop: "2rem",
          }}
        >
          {prevWork ? (
            <Link href={`/works/${(prevWork as any).slug}`}>
              <div
                style={{
                  textDecoration: "none",
                  padding: "1rem",
                  border: "1px solid rgba(26,20,16,0.12)",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "block",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1a3a8f";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(26,58,143,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(26,20,16,0.12)";
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "#3a3028",
                    opacity: 0.5,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  ← Previous
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#1a1410",
                  }}
                >
                  {(prevWork as any).title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextWork ? (
            <Link href={`/works/${(nextWork as any).slug}`}>
              <div
                style={{
                  textDecoration: "none",
                  padding: "1rem",
                  border: "1px solid rgba(26,20,16,0.12)",
                  textAlign: "right",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "block",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1a3a8f";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(26,58,143,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(26,20,16,0.12)";
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "#3a3028",
                    opacity: 0.5,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Next →
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#1a1410",
                  }}
                >
                  {(nextWork as any).title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
