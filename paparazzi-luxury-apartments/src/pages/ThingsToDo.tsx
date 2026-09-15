import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { OptimizedImage } from "../components/common/OptimizedImage";
import { attractions } from "../data/attractions";
import { Icon } from "../components/common/Icon";

function getDistanceClass(distance?: string) {
  if (!distance) return "distance-badge--unknown";

  const value = Number.parseFloat(distance.replace(",", "."));

  if (value < 1) return "distance-badge--close";
  if (value <= 5) return "distance-badge--nearby";
  if (value <= 10) return "distance-badge--moderate";

  return "distance-badge--far";
}

export default function ThingsToDo() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.thingsTitle")}
        description={t("attractions.description")}
      />

      <div className="page-header container">
        <Breadcrumbs label={t("navigation.thingsToDo")} />

        <p className="eyebrow">{t("attractions.eyebrow")}</p>

        <h1>{t("attractions.title")}</h1>

        <p>{t("attractions.description")}</p>
      </div>

      <section className="section section--soft attractions-section">
        <div className="container">
          <div className="attraction-grid">
            {attractions.map((attraction, index) => (
              <article className="attraction-card" key={attraction.id}>
                <div className="attraction-image">
                  <OptimizedImage
                    src={attraction.image}
                    medium={attraction.image}
                    large={attraction.image}
                    alt={t(attraction.nameKey)}
                    width={1400}
                    height={900}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />

                  {attraction.distance && (
                    <span
                      className={`distance-badge ${getDistanceClass(
                        attraction.distance
                      )}`}
                    >
                      {attraction.distance}
                    </span>
                  )}

                  <span className="attraction-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="attraction-card-body">
                  <div className="attraction-icon">
                    <Icon name={attraction.icon} size={21} />
                  </div>

                  <p className="attraction-category">
                    {t(attraction.categoryKey)}
                  </p>

                  <h2>{t(attraction.nameKey)}</h2>

                  <p className="attraction-description">
                    {t(attraction.descriptionKey)}
                  </p>

                  <a
                    className="attraction-map-link"
                    href={attraction.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t("buttons.map")}</span>
                    <Icon name="external" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
