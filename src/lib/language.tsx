import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "ko";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("portfolio-language");
  return saved === "ko" ? "ko" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "ko" ? "ko" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === "ko" ? "en" : "ko")),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function text(language: Language, en: string, ko: string) {
  return language === "ko" ? ko : en;
}

export function pick<T = string>(item: any, key: string, language: Language): T {
  const localizedKey = `${key}Ko`;
  return (language === "ko" && item?.[localizedKey] != null ? item[localizedKey] : item?.[key]) as T;
}

export function pickArray(item: any, key: string, language: Language): string[] {
  const value = pick<string[] | undefined>(item, key, language);
  return Array.isArray(value) ? value : [];
}

export function tagText(tag: string, language: Language) {
  if (language === "en") return tag;
  const labels: Record<string, string> = {
    ALL: "전체",
    RESEARCH: "연구",
    STUDY: "스터디",
    NOTES: "노트",
    AWARD: "수상",
  };
  return labels[tag] ?? tag;
}

export function LanguageToggle({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { language, toggleLanguage } = useLanguage();
  const isDark = variant === "dark";
  const nextLabel = language === "ko" ? "EN" : "한글";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "ko" ? "Switch to English" : "한국어로 전환"}
      style={{
        border: `1px solid ${isDark ? "rgba(255,255,255,0.35)" : "rgba(26,20,16,0.25)"}`,
        backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.22)",
        color: isDark ? "rgba(255,255,255,0.86)" : "#1a1410",
        fontFamily: "var(--font-mono)",
        fontSize: "0.64rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        padding: "0.22rem 0.55rem",
        minWidth: "2.7rem",
        height: "1.75rem",
        cursor: "pointer",
        textTransform: "uppercase",
      }}
    >
      {nextLabel}
    </button>
  );
}
