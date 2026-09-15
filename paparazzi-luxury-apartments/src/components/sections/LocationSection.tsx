import { useTranslation } from "react-i18next";
import { hotelAddress, googleMapsUrl } from "../../data/hotel";
import { attractions } from "../../data/attractions";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";
import { OptimizedImage } from "../common/OptimizedImage";

export function LocationSection() {
  const { t } = useTranslation();

  const clockTower = attractions.find(
    (attraction) => attraction.id === "clock-tower"
  );

  const sirokSokak = attractions.find(
    (attraction) => attraction.id === "sirok-sokak"
  );

  return (
    <section className="section location-section">
      <div className="container">
        <div className="location-feature">
          {/* Visual side */}
          <div className="location-visual">
            <OptimizedImage
              src="/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg"
              medium="/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg"
              large="/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg"
              alt={t("attractions.clock.name")}
              width={1400}
              height={1000}
              loading="lazy"
              sizes="(max-width: 800px) 100vw, 52vw"
            />

            <div className="location-visual-overlay" />

            <div className="location-visual-content">
              <span className="location-visual-label">
                {t("location.eyebrow")}
              </span>

              <strong>BITOLA</strong>

              <span>North Macedonia</span>
            </div>

            <div className="location-pin">
              <Icon name="pin" size={22} />
            </div>
          </div>

          {/* Content side */}
          <div className="location-content">
            <p className="eyebrow">{t("location.eyebrow")}</p>

            <h2>{t("location.title")}</h2>

            <p className="location-description">
              {t("location.description")}
            </p>

            <div className="location-address">
              <div className="location-address-icon">
                <Icon name="pin" size={21} />
              </div>

              <div>
                <span>{t("location.address")}</span>
                <strong>{hotelAddress}</strong>
              </div>
            </div>

            <div className="location-bottom">
              <p className="location-parking">
                <Icon name="check" size={17} />
                {t("location.parking")}
              </p>

              <Button
                href={googleMapsUrl}
                icon="external"
              >
                {t("location.directions")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
