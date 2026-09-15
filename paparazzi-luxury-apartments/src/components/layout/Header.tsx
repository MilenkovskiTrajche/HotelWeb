import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";

const nav = [
  ["rooms", "/rooms"],
  ["about", "/about"],
  ["amenities", "/amenities"],
  ["gallery", "/gallery"],
  ["thingsToDo", "/things-to-do"],
  ["location", "/location"],
  ["faq", "/faq"],
  ["contact", "/contact"],
] as const;

export function Header() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      menuRef.current
        ?.querySelector<HTMLElement>("a,button")
        ?.focus();
    }
  }, [open]);

  const setLang = (lang: "en" | "de" | "mk") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("paparazzi-language", lang);
  };

  return (
    <header
      className={`site-header ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <div className="container header-inner">

        {/* LOGO */}
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="PAPARAZZI Luxury Apartments"
        >
          <img
            className="brand-logo"
            src="/images/og-placeholder-rm-bg.svg"
            alt="PAPARAZZI Luxury Apartments"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="desktop-nav"
          aria-label={t("navigation.home")}
        >
          {nav.map(([key, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {t(`navigation.${key}`)}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">

          <label className="language-select">
            <Icon name="globe" size={17} />

            <span className="sr-only">
              {t("common.language")}
            </span>

            <select
              value={i18n.language}
              onChange={(e) =>
                setLang(
                  e.target.value as "en" | "de" | "mk"
                )
              }
              aria-label={t("common.language")}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="mk">Македонски</option>
            </select>
          </label>

          <Button to="/contact" variant="solid">
            {t("buttons.book")}
          </Button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="icon-button mobile-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            aria-label={
              open
                ? t("common.close")
                : t("common.menu")
            }
          >
            <Icon
              name={open ? "close" : "menu"}
              size={23}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("common.menu")}
        >
          <nav className="mobile-menu-nav">
            {nav.map(([key, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
              >
                {t(`navigation.${key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-action">
            <Button
              to="/contact"
              onClick={() => setOpen(false)}
            >
              {t("buttons.book")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
