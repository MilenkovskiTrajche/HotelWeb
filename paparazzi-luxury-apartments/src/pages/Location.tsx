import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { LocationSection } from "../components/sections/LocationSection";
import { hotelAddress } from "../data/hotel";
export default function Location(){const {t}=useTranslation();return <><SEO title={t("seo.locationTitle")} description={t("location.description")}/><div className="page-header container"><Breadcrumbs label={t("navigation.location")}/><p className="eyebrow">{t("location.eyebrow")}</p><h1>{t("location.title")}</h1><p>{hotelAddress}</p></div><LocationSection/></>;}