import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { BookingCTA } from "../components/booking/BookingCTA";
export default function About(){const {t}=useTranslation();return <><SEO title={t("seo.aboutTitle")} description={t("about.text1")}/><div className="page-header container"><Breadcrumbs label={t("navigation.about")}/><p className="eyebrow">{t("about.eyebrow")}</p><h1>{t("about.title")}</h1></div><section className="section"><div className="container prose two-column"><p>{t("about.text1")}</p><p>{t("about.text2")}</p></div></section><BookingCTA/></>;}