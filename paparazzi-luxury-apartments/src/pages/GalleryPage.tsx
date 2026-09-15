import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Gallery } from "../components/gallery/Gallery";
export default function GalleryPage(){const {t}=useTranslation();return <><SEO title={t("seo.galleryTitle")} description={t("gallery.description")}/><div className="page-header container"><Breadcrumbs label={t("navigation.gallery")}/><p className="eyebrow">{t("gallery.eyebrow")}</p><h1>{t("gallery.title")}</h1><p>{t("gallery.description")}</p></div><section className="section"><div className="container"><Gallery/></div></section></>;}