import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { OptimizedImage } from "../components/common/OptimizedImage";
import { Button } from "../components/common/Button";
import { SectionHeading } from "../components/sections/SectionHeading";
import { RoomCard } from "../components/rooms/RoomCard";
import { Gallery } from "../components/gallery/Gallery";
import { LocationSection } from "../components/sections/LocationSection";
import { BookingCTA } from "../components/booking/BookingCTA";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { rooms } from "../data/rooms";
import { amenityGroups } from "../data/amenities";
import { hotelAddress } from "../data/hotel";
import { Icon } from "../components/common/Icon";
import { attractions } from "../data/attractions";

export function Home() {
 const {t}=useTranslation();
 const schema={"@context":"https://schema.org","@type":"LodgingBusiness","name":"PAPARAZZI Luxury Apartments","address":{"@type":"PostalAddress","streetAddress":hotelAddress,"addressLocality":"Bitola","addressCountry":"MK"},"url":window.location.href};
 return <><SEO title={t("seo.homeTitle")} description={t("seo.homeDescription")} schema={schema}/>
 <section className="hero"><div className="hero-image">
<OptimizedImage src="/images/hero/CTP21111.jpg" medium="/images/hero/CTP21111.jpg" large="/images/hero/CTP21111.jpg" alt={t("hero.imageAlt")} width={1800} height={1200} loading="eager" fetchPriority="high" sizes="100vw"/></div><div className="hero-overlay"/><div className="container hero-content"><p className="eyebrow">{t("hero.eyebrow")}</p><h1>{t("hero.title")}</h1><p>{t("hero.description")}</p><div className="hero-actions"><Button to="/contact" icon="arrow">{t("buttons.book")}</Button><Button to="/rooms" variant="outline">{t("buttons.explore")}</Button></div></div></section>
 <section className="section intro-section"><div className="container intro-grid"><div><p className="eyebrow">{t("hotel.introEyebrow")}</p><h2>{t("hotel.introTitle")}</h2></div><div><p>{t("hotel.introText")}</p><div className="mini-features"><span><Icon name="key"/>{t("hotel.selfCheck")}</span><span><Icon name="check"/>{t("hotel.courtyard")}</span><span><Icon name="calendar"/>{t("hotel.cleaning")}</span></div></div></div></section>
 <section className="section section--soft"><div className="container"><SectionHeading eyebrow={t("rooms.eyebrow")} title={t("rooms.title")} description={t("rooms.description")}><Button to="/rooms" variant="text" icon="arrow">{t("buttons.viewAll")}</Button></SectionHeading><div className="room-grid">{rooms.map(r=><RoomCard key={r.slug} room={r}/>)}</div></div></section>
 <section className="section"><div className="container"><SectionHeading eyebrow={t("amenities.eyebrow")} title={t("amenities.title")}/><div className="amenity-strip">{amenityGroups[0].items.slice(0,6).map(([icon,key])=><div className="amenity-tile" key={key}><Icon name={icon as any}/><span>{t(key)}</span></div>)}</div><Link className="text-link centered-link" to="/amenities">{t("buttons.learnMore")} <Icon name="arrow" size={16}/></Link></div></section>
 <section className="section section--dark"><div className="container"><SectionHeading eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} description={t("gallery.description")}/><Gallery limit={5}/><div className="center-action"><Button to="/gallery" variant="outline">{t("buttons.viewAll")}</Button></div></div></section>
<section className="section home-attractions-section">
  <div className="container">
    <SectionHeading
      eyebrow={t("attractions.eyebrow")}
      title={t("attractions.title")}
      description={t("attractions.description")}
    />

    <div className="home-attraction-grid">
      {attractions.slice(0, 3).map((attraction) => (
        <article className="home-attraction-card" key={attraction.id}>
          <div className="home-attraction-image">
            <OptimizedImage
              src={attraction.image}
              medium={attraction.image}
              large={attraction.image}
              alt={t(attraction.nameKey)}
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />

            {attraction.distance && (
              <span
                className={`distance-badge distance-badge--home ${
                  attraction.distance.includes("600")
                    ? "distance-badge--close"
                    : "distance-badge--nearby"
                }`}
              >
                {attraction.distance}
              </span>
            )}
          </div>

          <div className="home-attraction-body">
            <div className="home-attraction-icon">
              <Icon name={attraction.icon} size={20} />
            </div>

            <p className="home-attraction-category">
              {t(attraction.categoryKey)}
            </p>

            <h3>{t(attraction.nameKey)}</h3>

            <p>{t(attraction.descriptionKey)}</p>

            <a
              className="home-attraction-link"
              href={attraction.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("buttons.map")}
              <Icon name="external" size={15} />
            </a>
          </div>
        </article>
      ))}
    </div>

    <div className="center-action home-attractions-action">
      <Button to="/things-to-do" variant="text" icon="arrow">
        {t("buttons.discover")}
      </Button>
    </div>
  </div>
</section>
 <LocationSection/>
 <section className="section section--soft"><div className="container narrow"><SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")}/><FAQAccordion/><div className="center-action"><Button to="/faq" variant="text" icon="arrow">{t("buttons.viewAll")}</Button></div></div></section>
 <BookingCTA/>
 </>;
}
export default Home;