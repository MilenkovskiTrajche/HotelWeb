import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const siteOrigin = typeof window !== "undefined" ? window.location.origin : "";

export function SEO({ title, description, image="/images/og-placeholder.svg", schema }: { title: string; description: string; image?: string; schema?: Record<string, unknown> }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = i18n.language;
    const canonical = `${siteOrigin}${location.pathname}`;
    const upsert = (selector: string, attrs: Record<string,string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        el = document.createElement(attrs.rel ? "link" : "meta") as HTMLMetaElement | HTMLLinkElement;
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k,v]) => el!.setAttribute(k,v));
    };
    upsert('meta[name="description"]', { name:"description", content:description });
    upsert('meta[property="og:title"]', { property:"og:title", content:title });
    upsert('meta[property="og:description"]', { property:"og:description", content:description });
    upsert('meta[property="og:url"]', { property:"og:url", content:canonical });
    upsert('meta[property="og:image"]', { property:"og:image", content:`${siteOrigin}${image}` });
    upsert('meta[name="twitter:title"]', { name:"twitter:title", content:title });
    upsert('meta[name="twitter:description"]', { name:"twitter:description", content:description });
    upsert('meta[name="twitter:image"]', { name:"twitter:image", content:`${siteOrigin}${image}` });
    upsert('link[rel="canonical"]', { rel:"canonical", href:canonical });
    ["en","de","mk"].forEach(lang => upsert(`link[hreflang="${lang}"]`, { rel:"alternate", hreflang:lang, href:`${siteOrigin}/${lang}${location.pathname === "/" ? "" : location.pathname}` }));
    upsert('link[hreflang="x-default"]', { rel:"alternate", hreflang:"x-default", href:canonical });
    let json = document.head.querySelector('script[data-schema="hotel"]');
    if (!json) { json = document.createElement("script"); json.setAttribute("type","application/ld+json"); json.setAttribute("data-schema","hotel"); document.head.appendChild(json); }
    json.textContent = JSON.stringify(schema ?? {});
  }, [title, description, image, schema, i18n.language, location.pathname]);
  return null;
}