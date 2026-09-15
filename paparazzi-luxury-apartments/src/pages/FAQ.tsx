import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { FAQAccordion } from "../components/common/FAQAccordion";
export default function FAQ(){const {t}=useTranslation();return <><SEO title={t("seo.faqTitle")} description={t("faq.title")}/><div className="page-header container"><Breadcrumbs label={t("navigation.faq")}/><p className="eyebrow">{t("faq.eyebrow")}</p><h1>{t("faq.title")}</h1></div><section className="section section--soft"><div className="container narrow"><FAQAccordion/></div></section></>;}