import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { RoomCard } from "../components/rooms/RoomCard";
import { rooms } from "../data/rooms";
import { BookingCTA } from "../components/booking/BookingCTA";
export default function Rooms(){const {t}=useTranslation();return <><SEO title={t("seo.roomsTitle")} description={t("seo.roomsDescription")}/><div className="page-header container"><Breadcrumbs label={t("navigation.rooms")}/><p className="eyebrow">{t("rooms.eyebrow")}</p><h1>{t("rooms.title")}</h1><p>{t("rooms.description")}</p></div><section className="section section--soft"><div className="container room-grid room-grid--large">{rooms.map(r=><RoomCard key={r.slug} room={r}/>)}</div></section><BookingCTA/></>;}