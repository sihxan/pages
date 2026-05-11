/* ============================================================
   WorksList.tsx — All works list page
   Design: "실험실 노트" — 과학적 아카이브 미학
   Static GitHub Pages version
   ============================================================ */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  fallbackPerson,
  fallbackWorks,
} from "@/lib/fallbackPortfolio";

const ALL_TAGS = ["ALL", "RESEARCH", "STUDY", "NOTES", "AWARD"];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function WorksList() {
  const [activeTag, setActiveTag] = useState("ALL");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const works = fallbackWorks;
  const person = fallbackPerson;

  const nameEn = person?.nameEn || "Kim Sihwan";
  const nameParts = nameEn.split(" ");
  const lab = person?.lab || "KDST Lab";
  const affiliation = person?.affiliation || "Kyung Hee University";

  const filtered = activeTag === "ALL"
    ? (works as any[])
    : (works as any[]).filter((w: any) => w.tag === activeTag);

  const hoveredWork = (works as any[]).find((w: any) => w.slug === hoveredSlug);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e8e0d0" }}>
      {/* Nav */}
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
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          ALL WORKS
        </span>
      </header>

      {/* Page header */}
      <div
        style={{
          backgroundColor: "#0a1628",
          padding: "4rem 2rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            {lab} · {affiliation}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Works
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Research projects, study notes, and experiments — a record of how I spend my time thinking about AI.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div
        style={{
          backgroundColor: "#e8e0d0",
          borderBottom: "1px solid rgba(26,20,16,0.1)",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "0",
          }}
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: activeTag === tag ? "#1a1410" : "rgba(26,20,16,0.4)",
                background: "none",
                border: "none",
                borderBottom: activeTag === tag ? "2px solid #1a3a8f" : "2px solid transparent",
                padding: "1rem 1.25rem",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              {tag}
              <span
                style={{
                  marginLeft: "0.4rem",
                  fontSize: "0.6rem",
                  opacity: 0.5,
                }}
              >
                {tag === "ALL"
                  ? (works as any[]).length
                  : (works as any[]).filter((w: any) => w.tag === tag).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Works list */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem 5rem",
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3rem 1fr 1fr 7rem 6rem",
            gap: "1rem",
            padding: "1rem 0 0.5rem",
            borderBottom: "1px solid rgba(26,20,16,0.12)",
            marginBottom: "0",
          }}
        >
          {["NO.", "TITLE", "AREA", "DATE", "STATUS"].map((col) => (
            <span
              key={col}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1a1410",
                opacity: 0.35,
              }}
            >
              {col}
            </span>
          ))}
        </div>

        {/* Work rows */}
        {(filtered as any[]).map((work: any, i: number) => (
          <Link key={(work as any).slug} href={`/works/${(work as any).slug}`}>
            <div
              className="reveal"
              onMouseEnter={() => setHoveredSlug((work as any).slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr 1fr 7rem 6rem",
                gap: "1rem",
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(26,20,16,0.08)",
                textDecoration: "none",
                transition: "background 0.2s",
                backgroundColor:
                  hoveredSlug === (work as any).slug ? "rgba(26,58,143,0.04)" : "transparent",
                transitionDelay: `${i * 0.04}s`,
                cursor: "pointer",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#1a3a8f",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  alignSelf: "center",
                }}
              >
                {(work as any).displayId}
              </span>

              {/* Title + desc */}
              <div style={{ alignSelf: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#1a1410",
                    marginBottom: "0.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  {(work as any).title}
                  <ExternalLink
                    size={11}
                    style={{
                      color: "#1a3a8f",
                      opacity: hoveredSlug === (work as any).slug ? 1 : 0,
                      transition: "opacity 0.2s",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#3a3028",
                    opacity: 0.6,
                    lineHeight: 1.5,
                  }}
                >
                  {(work as any).subtitle}
                </div>
              </div>

              {/* Area */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#3a3028",
                  opacity: 0.65,
                  alignSelf: "center",
                  lineHeight: 1.5,
                }}
              >
                {(work as any).area}
              </div>

              {/* Date */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#1a3a8f",
                  letterSpacing: "0.04em",
                  alignSelf: "center",
                }}
              >
                {(work as any).date}
              </div>

              {/* Status */}
              <div style={{ alignSelf: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor:
                      (work as any).status === "In Progress"
                        ? "#27ae60"
                        : (work as any).status === "Ongoing"
                        ? "#d4a017"
                        : "transparent",
                    color:
                      (work as any).status === "Completed"
                        ? "#1a1410"
                        : "white",
                    border:
                      (work as any).status === "Completed"
                        ? "1px solid rgba(26,20,16,0.3)"
                        : "none",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    padding: "0.12rem 0.45rem",
                    textTransform: "uppercase",
                  }}
                >
                  {(work as any).status}
                </span>
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div
            style={{
              padding: "4rem 0",
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "rgba(26,20,16,0.4)",
            }}
          >
            No works in this category yet.
          </div>
        )}
      </div>

      {/* Floating image preview on hover */}
      {hoveredWork && (
        <div
          style={{
            position: "fixed",
            left: mousePos.x + 24,
            top: mousePos.y - 80,
            width: "220px",
            pointerEvents: "none",
            zIndex: 100,
            boxShadow: "0 12px 40px rgba(10,22,40,0.25)",
            transition: "opacity 0.15s ease",
          }}
        >
          <img
            src={(hoveredWork as any).img}
            alt={(hoveredWork as any).title}
            style={{
              width: "100%",
              height: "140px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              backgroundColor: "#0a1628",
              padding: "0.6rem 0.8rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.04em",
              }}
            >
              {(hoveredWork as any).tag} · {(hoveredWork as any).date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
