import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Button } from "../components/common/Button";
export default function NotFound(){const {t}=useTranslation();return <><SEO title={t("notFound.title")} description={t("notFound.text")}/><div className="not-found container"><span>404</span><h1>{t("notFound.title")}</h1><p>{t("notFound.text")}</p><div><Button to="/">{t("notFound.home")}</Button><Button to="/rooms" variant="outline">{t("notFound.rooms")}</Button></div></div></>;}