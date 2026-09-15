import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { legalBusinessInformation } from "../data/hotel";

export default function Legal({kind}:{kind:"privacy"|"cookie"|"terms"|"accessibility"}){const {t}=useTranslation();const map={privacy:["legal.privacyTitle","legal.privacy"],cookie:["legal.cookieTitle","legal.cookie"],terms:["legal.termsTitle","legal.terms"],accessibility:["legal.accessibilityTitle","legal.accessibility"]} as const;const [titleKey,textKey]=map[kind];return <><SEO title={t("seo.legalTitle")} description={t(textKey)}/><div className="page-header container"><Breadcrumbs label={t(titleKey)}/><h1>{t(titleKey)}</h1></div><section className="section"><div className="container prose narrow"><p>{t(textKey)}</p><p>{legalBusinessInformation}</p></div></section></>;}