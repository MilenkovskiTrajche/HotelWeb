import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Room } from "../../types";
import { OptimizedImage } from "../common/OptimizedImage";
import { Icon } from "../common/Icon";

export function RoomCard({ room }: { room: Room }) {
  const { t } = useTranslation();
  const title = t(`rooms.${room.kind}.name`);
  return <article className="room-card">
    <Link to={`/rooms/${room.slug}`} className="room-card-image">
      <OptimizedImage src={room.images[0].src} medium={room.images[0].medium} large={room.images[0].large} alt={t(room.images[0].altKey)} width={room.images[0].width} height={room.images[0].height}/>
    </Link>
    <div className="room-card-body">
      <div className="room-card-top"><span className="eyebrow">{room.count} {t("rooms.units")}</span><span>{t("rooms.capacity")}: {room.capacity}</span></div>
      <h3><Link to={`/rooms/${room.slug}`}>{title}</Link></h3><p>{t(room.descriptionKey)}</p>
      <Link className="text-link" to={`/rooms/${room.slug}`}>{t("rooms.details")} <Icon name="arrow" size={16}/></Link>
    </div>
  </article>;
}