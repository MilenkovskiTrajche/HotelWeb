import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { email, phoneNumber, instagramUrl, facebookUrl } from "../../data/hotel";
import { Icon } from "../common/Icon";

export function Footer() {
  const { t } = useTranslation();
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Link className="brand" to="/" aria-label="PAPARAZZI Luxury Apartments" > <img className="brand-logo" src="/images/og-placeholder-rm-bg.svg" alt="PAPARAZZI Luxury Apartments" /> </Link></div>
      <div><h3>{t("footer.quickLinks")}</h3><div className="footer-links"><Link to="/rooms">{t("navigation.rooms")}</Link><Link to="/gallery">{t("navigation.gallery")}</Link><Link to="/things-to-do">{t("navigation.thingsToDo")}</Link><Link to="/location">{t("navigation.location")}</Link></div></div>
      <div><h3>{t("footer.contact")}</h3><div className="footer-links"><a href={`tel:${phoneNumber}`}><Icon name="phone" size={15}/>{phoneNumber}</a><a href={`mailto:${email}`}><Icon name="mail" size={15}/>{email}</a></div></div>
      <div><h3>{t("footer.legal")}</h3><div className="footer-links"><Link to="/privacy-policy">{t("legal.privacyTitle")}</Link><Link to="/cookie-policy">{t("legal.cookieTitle")}</Link><Link to="/terms">{t("legal.termsTitle")}</Link><Link to="/accessibility">{t("legal.accessibilityTitle")}</Link><div className="social-row"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram"/></a><a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook"/></a></div></div></div>
    </div>
    <div className="container footer-bottom"><span>{t("footer.copyright", {year:new Date().getFullYear()})}</span><span>Bitola · North Macedonia</span></div>
  </footer>;
}