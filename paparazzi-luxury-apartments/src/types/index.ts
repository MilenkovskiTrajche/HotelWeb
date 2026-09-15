export type Language = "en" | "de" | "mk";

export type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "chevron"
  | "close"
  | "globe"
  | "menu"
  | "phone"
  | "mail"
  | "pin"
  | "wifi"
  | "air"
  | "tv"
  | "bath"
  | "fridge"
  | "kettle"
  | "heating"
  | "camera"
  | "key"
  | "whatsapp"
  | "viber"
  | "instagram"
  | "facebook"
  | "external";

export interface Room {
  slug: string;
  kind: "double" | "triple" | "apartment";
  count: number;
  capacity: string;
  size: string;
  bed: string;
  descriptionKey: string;
  features: string[];
  images: ImageItem[];
}

export interface ImageItem {
  id: string;
  src: string;
  medium: string;
  large: string;
  altKey: string;
  width: number;
  height: number;
}

export interface Attraction { id: string; nameKey: string; descriptionKey: string; categoryKey: string; distance?: string; mapUrl: string; image: string; icon: IconName; }