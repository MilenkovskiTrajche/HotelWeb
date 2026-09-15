import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { amenityGroups } from "../data/amenities";
import { Icon } from "../components/common/Icon";
export default function Amenities(){const {t}=useTranslation();return <><SEO title={t("seo.amenitiesTitle")} description={t("amenities.title")}/><div className="page-header container"><Breadcrumbs label={t("navigation.amenities")}/><p className="eyebrow">{t("amenities.eyebrow")}</p><h1>{t("amenities.title")}</h1></div><section className="section section--soft"><div className="container amenity-groups">{amenityGroups.map(g=><div className="amenity-group" key={g.key}><h2>{t(`amenities.${g.key}`, g.key==="room"?"Room":g.key==="bathroom"?"Bathroom":"Property")}</h2><ul>{g.items.map(([icon,key])=><li key={key}><Icon name={icon as any}/><span>{t(key)}</span></li>)}</ul></div>)}</div></section></>;}