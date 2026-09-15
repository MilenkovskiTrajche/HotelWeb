import { useTranslation } from "react-i18next";
import { airbnbUrl, bookingUrl, phoneNumber, whatsappNumber, viberNumber } from "../../data/hotel";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";

export function BookingCTA() {
  const { t } = useTranslation();
  return <section className="booking-section">
    <div className="container booking-panel">
      <div><p className="eyebrow">{t("booking.eyebrow")}</p><h2>{t("booking.title")}</h2><p>{t("booking.description")}</p></div>
      <div className="booking-actions">
        <Button href={bookingUrl} icon="external">{t("booking.booking")}</Button>
        <Button href={airbnbUrl} variant="outline" icon="external">{t("booking.airbnb")}</Button>
        <a className="contact-chip" href={`tel:${phoneNumber}`}><Icon name="phone"/><span>{t("booking.phone")}</span></a>
        <a className="contact-chip" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/><span>{t("booking.whatsapp")}</span></a>
        <a className="contact-chip" href={`viber://chat?number=%2B${viberNumber}`}><Icon name="viber"/><span>{t("booking.viber")}</span></a>
      </div>
    </div>
  </section>;
}