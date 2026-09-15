import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export function Breadcrumbs({label}: {label:string}) { const {t}=useTranslation(); return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">{t("navigation.home")}</Link><span>/</span><span>{label}</span></nav>; }