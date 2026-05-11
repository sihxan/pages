/* ============================================================
   Home.tsx — Kim Sihwan AI Researcher Portfolio
   Design: "실험실 노트" — 과학적 아카이브 미학
   Sections: Hero → Works → About/FieldNote → Skills → Contact → Footer
   Static GitHub Pages version
   ============================================================ */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Mail, Github, ExternalLink, Star } from "lucide-react";
import {
  fallbackAchievements,
  fallbackEducation,
  fallbackExperience,
  fallbackPerson,
  fallbackResearchInterests,
  fallbackSkillGroups,
  fallbackWorks,
} from "@/lib/fallbackPortfolio";

const IMG_FILM_STRIP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/field-notes-strip-e6SQdXgyxVXtTyPPN9sd69.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/hero-bg-AvX6JHBH7zMKhpUCg8yYVk.webp";

// ── Scroll Reveal Hook ───────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Nav ──────────────────────────────────────────────────────
function Nav({ nameEn }: { nameEn: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["WORKS", "ABOUT", "NOTES", "LAB", "CONTACT"];
  const parts = nameEn.split(" ");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400"
      style={{
        padding: "1rem 1.5rem",
        backgroundColor: scrolled ? "rgba(10,22,40,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          color: "white",
          textDecoration: "none",
          lineHeight: 1.25,
        }}
      >
        <div style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
          {parts[0]?.toLowerCase()}
        </div>
        <div style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
          {parts[1]?.toLowerCase()}
        </div>
      </a>

      <div className="hidden md:flex items-center gap-5">
        <span style={{ color: "#facc15", fontSize: "0.45rem" }}>●</span>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
          >
            {item}
          </a>
        ))}
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none" }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              backgroundColor: "white",
              transition: "transform 0.3s",
              transform:
                menuOpen
                  ? i === 0 ? "rotate(45deg) translateY(6px)"
                  : i === 1 ? "scaleX(0)"
                  : "rotate(-45deg) translateY(-6px)"
                  : "none",
            }}
          />
        ))}
      </button>

      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col py-4"
          style={{ backgroundColor: "rgba(10,22,40,0.98)" }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function HeroSection({ heroCopy }: { heroCopy: string[] }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        backgroundColor: "#0a1628",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.88,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.05) 50%, rgba(10,22,40,0.4) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 100%)",
        }}
      />

      <div style={{ position: "absolute", bottom: "4.5rem", left: "2.5rem", zIndex: 10 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.95rem, 2.2vw, 1.35rem)",
            color: "white",
            lineHeight: 1.75,
            fontWeight: 300,
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          {heroCopy[0]}
          <br />
          {heroCopy[1]}
        </p>
        <div
          style={{
            width: "2.5rem",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.6)",
            marginTop: "0.8rem",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "1.5rem",
          bottom: "4rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          scroll
        </span>
        <div style={{ width: "1px", height: "2.5rem", backgroundColor: "rgba(255,255,255,0.25)" }} />
        <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.45)" }}>↓</span>
      </div>
    </section>
  );
}

// ── Works ────────────────────────────────────────────────────
function WorksSection({ works }: { works: any[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="works"
      style={{ position: "relative", padding: "4rem 0 3rem", backgroundColor: "#e8e0d0" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, padding: "0 2rem" }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1280px",
            margin: "0 auto 2rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#1a1410",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            WORKS
          </h2>
          <Link href="/works">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "#1a1410",
                textDecoration: "none",
                opacity: 0.65,
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.opacity = "0.65")}
            >
              VIEW ALL <ArrowRight size={11} />
            </span>
          </Link>
        </div>

        {/* Horizontal scroll cards */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            paddingBottom: "1rem",
          }}
        >
          {works.map((work, i) => (
            <Link key={work.slug} href={`/works/${work.slug}`}>
              <div
                className="reveal"
                onMouseEnter={() => setHoveredId(work.displayId)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flexShrink: 0,
                  width: "clamp(200px, 20vw, 260px)",
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  transitionDelay: `${i * 0.07}s`,
                  transform: hoveredId === work.displayId ? "translateY(-5px)" : "translateY(0)",
                  transition: "transform 0.3s ease",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    backgroundColor: "#1a1410",
                  }}
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform: hoveredId === work.displayId ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      left: "0.5rem",
                      backgroundColor: "#1a3a8f",
                      color: "white",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      padding: "0.12rem 0.4rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {work.displayId}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(26,58,143,0.15)",
                      opacity: hoveredId === work.displayId ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ExternalLink size={20} color="white" />
                  </div>
                </div>

                <div style={{ paddingTop: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1a1410",
                      marginBottom: "0.3rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {work.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "#3a3028",
                      lineHeight: 1.65,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {work.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: work.tagColor,
                        color: work.tagTextColor,
                        border: work.tagBorder || "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        padding: "0.1rem 0.4rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {work.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: "#1a3a8f",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {work.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About + Field Note ────────────────────────────────────────
function AboutSection({ person }: { person: any }) {
  return (
    <section id="about" style={{ backgroundColor: "#e8e0d0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 1fr) minmax(320px, 1.5fr)",
        }}
      >
        {/* Left: About dark panel */}
        <div
          className="reveal"
          style={{
            backgroundColor: "#0a1628",
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "440px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#1a3a8f",
                color: "white",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                padding: "0.2rem 0.6rem",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              ABOUT
            </div>

            {/* Name */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.25rem",
                }}
              >
                {person.nameEn}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.04em",
                }}
              >
                {person.nameKo}
              </p>
            </div>

            {/* Affiliation block */}
            <div
              style={{
                borderLeft: "2px solid #1a3a8f",
                paddingLeft: "0.85rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {person.lab}
                <br />
                <span style={{ opacity: 0.55, fontSize: "0.65rem" }}>{person.department}</span>
                <br />
                <span style={{ opacity: 0.55, fontSize: "0.65rem" }}>{person.affiliation} · {person.location}</span>
              </p>
            </div>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.9,
                marginBottom: "1rem",
              }}
            >
              {(Array.isArray(person.about) ? person.about as string[] : []).map((line: string, i: number) =>
                line === "" ? <br key={i} /> : <span key={i}>{line}<br /></span>
              )}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "#d4a017",
                letterSpacing: "0.06em",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              more about me →
            </a>
            <Star size={18} style={{ color: "rgba(255,255,255,0.2)", strokeWidth: 1.5 }} />
          </div>
        </div>

        {/* Right: Field Note */}
        <div
          className="reveal"
          style={{
            backgroundColor: "#f0e8d8",
            padding: "3rem 2.5rem",
            position: "relative",
          }}
        >
          {/* Tape */}
          <div
            style={{
              position: "absolute",
              top: "-4px",
              right: "5rem",
              width: "55px",
              height: "16px",
              backgroundColor: "rgba(212,160,23,0.35)",
              transform: "rotate(-1.5deg)",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "1.2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "#1a1410",
                letterSpacing: "0.14em",
                opacity: 0.55,
                textTransform: "uppercase",
              }}
            >
              FIELD NOTE
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "#1a1410",
                letterSpacing: "0.1em",
                opacity: 0.55,
              }}
            >
              {person.fieldNoteId}
            </span>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "#1a1410",
              lineHeight: 1.9,
              marginBottom: "1.75rem",
              whiteSpace: "pre-line",
            }}
          >
            {person.fieldNote}
          </p>

          {/* Film strip */}
          <div style={{ overflow: "hidden", border: "1px solid rgba(26,20,16,0.12)" }}>
            <img
              src={IMG_FILM_STRIP}
              alt="Field notes film strip"
              style={{
                display: "block",
                width: "100%",
                height: "110px",
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Research Experience Section ───────────────────────────────
function ResearchSection({
  experience,
  education,
  achievements,
  researchInterests,
  person,
}: {
  experience: any[];
  education: any[];
  achievements: any[];
  researchInterests: any[];
  person: any;
}) {
  return (
    <section
      id="notes"
      style={{
        backgroundColor: "#e8e0d0",
        padding: "4rem 2rem",
        borderTop: "1px solid rgba(26,20,16,0.08)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Research Experience */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#1a1410",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              RESEARCH EXPERIENCE
            </h2>

            {experience.map((exp: any, i: number) => (
              <div key={i} style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1410",
                    marginBottom: "0.2rem",
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#1a3a8f",
                    marginBottom: "0.15rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {exp.org}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "#3a3028",
                    opacity: 0.55,
                    marginBottom: "1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {exp.period}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {(Array.isArray(exp.activities) ? exp.activities as string[] : []).map((act: string, j: number) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "#3a3028",
                        lineHeight: 1.65,
                        paddingBottom: "0.4rem",
                        marginBottom: "0.4rem",
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "#1a3a8f", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(26,20,16,0.1)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#1a1410",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.6,
                }}
              >
                EDUCATION
              </h3>
              {education.map((edu: any, i: number) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1a1410",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {edu.school}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "#3a3028",
                      opacity: 0.6,
                      lineHeight: 1.6,
                    }}
                  >
                    {edu.dept} · {edu.major}
                    <br />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(26,20,16,0.1)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#1a1410",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.6,
                }}
              >
                ACHIEVEMENTS
              </h3>
              {achievements.map((ach: any, i: number) => (
                <div key={i} style={{ marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#1a1410",
                      marginBottom: "0.1rem",
                    }}
                  >
                    {ach.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "#3a3028",
                      opacity: 0.6,
                    }}
                  >
                    {ach.event} · {ach.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Research Interests */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#1a1410",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              RESEARCH INTERESTS
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {researchInterests.map((item: any) => (
                <span
                  key={item.id}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#1a1410",
                    border: "1px solid rgba(26,20,16,0.25)",
                    padding: "0.25rem 0.65rem",
                    letterSpacing: "0.02em",
                    transition: "border-color 0.2s, color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "#1a3a8f";
                    (e.currentTarget as HTMLSpanElement).style.color = "#1a3a8f";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(26,20,16,0.25)";
                    (e.currentTarget as HTMLSpanElement).style.color = "#1a1410";
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Research identity quote */}
            <div
              style={{
                backgroundColor: "#0a1628",
                padding: "1.75rem 2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.25rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                RESEARCH IDENTITY
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.85,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                "{person.aboutLong}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills + Contact ──────────────────────────────────────────
function SkillsContactSection({ skillGroups, person }: { skillGroups: any[]; person: any }) {
  return (
    <section
      id="lab"
      style={{
        backgroundColor: "#e8e0d0",
        padding: "4rem 0",
        borderTop: "1px solid rgba(26,20,16,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Skills */}
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#1a1410",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            SKILLS &amp; TOOLS
          </h2>

          {skillGroups.map((group: any) => (
            <div key={group.id} style={{ marginBottom: "1.25rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#1a1410",
                  opacity: 0.4,
                  marginBottom: "0.6rem",
                }}
              >
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {(group.items || []).map((skill: any) => (
                  <span
                    key={skill.id}
                    style={{
                      display: "inline-block",
                      backgroundColor: skill.bg,
                      color: skill.color,
                      border: skill.border || `1.5px solid ${skill.bg}`,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      padding: "0.25rem 0.7rem",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLSpanElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLSpanElement).style.boxShadow = "none";
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="reveal" style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#1a3a8f",
              color: "white",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              padding: "0.2rem 0.6rem",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            CONTACT
          </div>

          <p
            style={{
              fontFamily: "var(--font-handwrite)",
              fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
              color: "#1a1410",
              lineHeight: 1.35,
              marginBottom: "1rem",
            }}
          >
            Let's build something
            <br />
            meaningful together.
          </p>

          <div
            style={{
              width: "2.5rem",
              height: "1px",
              backgroundColor: "#1a1410",
              opacity: 0.35,
              marginBottom: "1.25rem",
            }}
          />

          <a
            href={`mailto:${person.email}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "#1a3a8f",
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <Mail size={13} />
            {person.email}
          </a>

          {/* Decorative */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "2rem",
              textAlign: "center",
              opacity: 0.3,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1.5px solid #1a1410",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.3rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ fontFamily: "var(--font-handwrite)", fontSize: "1rem" }}>:)</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-handwrite)",
                fontSize: "0.85rem",
                color: "#1a1410",
                lineHeight: 1.3,
              }}
            >
              HAVE
              <br />A
              <br />
              GOOD
              <br />
              DAY!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer({ person }: { person: any }) {
  return (
    <footer
      style={{
        backgroundColor: "#0a1628",
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.06em",
        }}
      >
        © 2025 {person.nameEn}
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {[
          { label: "GITHUB", href: person.github, Icon: Github },
          { label: "EMAIL", href: `mailto:${person.email}`, Icon: Mail },
        ].map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.1em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
          >
            <Icon size={11} />
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────
export default function Home() {
  useReveal();

  const person = fallbackPerson;
  const works = fallbackWorks;
  const skillGroups = fallbackSkillGroups;
  const researchInterests = fallbackResearchInterests;
  const experience = fallbackExperience;
  const education = fallbackEducation;
  const achievements = fallbackAchievements;
  const heroCopy = Array.isArray(person.heroCopy) ? person.heroCopy as string[] : [];

  return (
    <div style={{ backgroundColor: "#e8e0d0", minHeight: "100vh" }}>
      <Nav nameEn={person.nameEn || "Kim Sihwan"} />
      <HeroSection heroCopy={heroCopy} />
      <WorksSection works={works as any[]} />
      <AboutSection person={person} />
      <ResearchSection
        experience={experience as any[]}
        education={education as any[]}
        achievements={achievements as any[]}
        researchInterests={researchInterests as any[]}
        person={person}
      />
      <SkillsContactSection skillGroups={skillGroups as any[]} person={person} />
      <Footer person={person} />
    </div>
  );
}
