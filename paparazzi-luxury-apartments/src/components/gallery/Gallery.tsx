import type { ImageItem } from "../../types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "../common/Icon";
import { OptimizedImage } from "../common/OptimizedImage";

const gallery: ImageItem[] = [
  {
    id: "gallery-01",
    src: "/images/gallery/CTP21496.jpg",
    medium: "/images/gallery/CTP21496.jpg",
    large: "/images/gallery/CTP21496.jpg",
    altKey: "images.gallery1",
    width: 1400,
    height: 900,
  },
  {
    id: "gallery-02",
    src: "/images/gallery/CTP21139.jpg",
    medium: "/images/gallery/CTP21139.jpg",
    large: "/images/gallery/CTP21139.jpg",
    altKey: "images.gallery2",
    width: 1400,
    height: 900,
  },
  {
    id: "gallery-03",
    src: "/images/hero/CTP21111.jpg",
    medium: "/images/hero/CTP21111.jpg",
    large: "/images/hero/CTP21111.jpg",
    altKey: "images.triple1",
    width: 1400,
    height: 900,
  },
  {
    id: "gallery-04",
    src: "/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg",
    medium:
      "/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg",
    large:
      "/images/gallery/823C0005-159D-44EC-BD10-434CB76F9372_1_105_c.jpeg",
    altKey: "images.gallery4",
    width: 1400,
    height: 900,
  },
  {
    id: "gallery-05",
    src: "/images/gallery/CTP21504.jpg",
    medium: "/images/gallery/CTP21504.jpg",
    large: "/images/gallery/CTP21504.jpg",
    altKey: "images.gallery5",
    width: 1400,
    height: 900,
  },
  {
    id: "gallery-06",
    src: "/images/gallery/D88AA749-0E26-4F9E-8E0B-2DB446267DED_1_105_c.jpeg",
    medium:
      "/images/gallery/D88AA749-0E26-4F9E-8E0B-2DB446267DED_1_105_c.jpeg",
    large:
      "/images/gallery/D88AA749-0E26-4F9E-8E0B-2DB446267DED_1_105_c.jpeg",
    altKey: "images.gallery6",
    width: 1400,
    height: 900,
  },

  // DOUBLE ROOM
  {
    id: "double-01",
    src: "/images/rooms/double/CTP21314-retouched.png",
    medium: "/images/rooms/double/CTP21314-retouched.png",
    large: "/images/rooms/double/CTP21314-retouched.png",
    altKey: "images.double1",
    width: 1400,
    height: 900,
  },
  {
    id: "double-02",
    src: "/images/rooms/double/CTP21329-retouched.png",
    medium: "/images/rooms/double/CTP21329-retouched.png",
    large: "/images/rooms/double/CTP21329-retouched.png",
    altKey: "images.double2",
    width: 1400,
    height: 900,
  },
  {
    id: "double-03",
    src: "/images/rooms/double/CTP21336.jpg",
    medium: "/images/rooms/double/CTP21336.jpg",
    large: "/images/rooms/double/CTP21336.jpg",
    altKey: "images.double3",
    width: 1400,
    height: 900,
  },
  {
    id: "double-04",
    src: "/images/rooms/double/CTP21444.jpg",
    medium: "/images/rooms/double/CTP21444.jpg",
    large: "/images/rooms/double/CTP21444.jpg",
    altKey: "images.double4",
    width: 1400,
    height: 900,
  },
  {
    id: "double-05",
    src: "/images/rooms/double/CTP21420-retouched.png",
    medium: "/images/rooms/double/CTP21420-retouched.png",
    large: "/images/rooms/double/CTP21420-retouched.png",
    altKey: "images.double5",
    width: 1400,
    height: 900,
  },
  {
    id: "double-06",
    src: "/images/rooms/double/CTP21421-retouched.png",
    medium: "/images/rooms/double/CTP21421-retouched.png",
    large: "/images/rooms/double/CTP21421-retouched.png",
    altKey: "images.double6",
    width: 1400,
    height: 900,
  },
  {
    id: "double-07",
    src: "/images/rooms/double/CTP21418-retouched.png",
    medium: "/images/rooms/double/CTP21418-retouched.png",
    large: "/images/rooms/double/CTP21418-retouched.png",
    altKey: "images.double7",
    width: 1400,
    height: 900,
  },
  {
    id: "double-08",
    src: "/images/rooms/double/CTP21326-retouched.png",
    medium: "/images/rooms/double/CTP21326-retouched.png",
    large: "/images/rooms/double/CTP21326-retouched.png",
    altKey: "images.double8",
    width: 1400,
    height: 900,
  },
  {
    id: "double-09",
    src: "/images/rooms/double/CTP21435-retouched.png",
    medium: "/images/rooms/double/CTP21435-retouched.png",
    large: "/images/rooms/double/CTP21435-retouched.png",
    altKey: "images.double9",
    width: 1400,
    height: 900,
  },
  {
    id: "double-10",
    src: "/images/rooms/double/CTP21431-retouched.png",
    medium: "/images/rooms/double/CTP21431-retouched.png",
    large: "/images/rooms/double/CTP21431-retouched.png",
    altKey: "images.double10",
    width: 1400,
    height: 900,
  },
  {
    id: "double-11",
    src: "/images/rooms/double/CTP21362-retouched.png",
    medium: "/images/rooms/double/CTP21362-retouched.png",
    large: "/images/rooms/double/CTP21362-retouched.png",
    altKey: "images.double11",
    width: 1400,
    height: 900,
  },
  {
    id: "double-12",
    src: "/images/rooms/double/CTP21402-retouched.png",
    medium: "/images/rooms/double/CTP21402-retouched.png",
    large: "/images/rooms/double/CTP21402-retouched.png",
    altKey: "images.double12",
    width: 1400,
    height: 900,
  },
  {
    id: "double-13",
    src: "/images/rooms/double/CTP21311-retouched.png",
    medium: "/images/rooms/double/CTP21311-retouched.png",
    large: "/images/rooms/double/CTP21311-retouched.png",
    altKey: "images.double13",
    width: 1400,
    height: 900,
  },
  {
    id: "double-14",
    src: "/images/rooms/double/CTP21348.jpg",
    medium: "/images/rooms/double/CTP21348.jpg",
    large: "/images/rooms/double/CTP21348.jpg",
    altKey: "images.double14",
    width: 1400,
    height: 900,
  },

  // TRIPLE ROOM
  {
    id: "triple-01",
    src: "/images/rooms/triple/CTP21378.jpg",
    medium: "/images/rooms/triple/CTP21378.jpg",
    large: "/images/rooms/triple/CTP21378.jpg",
    altKey: "images.triple1",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-02",
    src: "/images/rooms/triple/CTP21474-retouched.png",
    medium: "/images/rooms/triple/CTP21474-retouched.png",
    large: "/images/rooms/triple/CTP21474-retouched.png",
    altKey: "images.triple2",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-03",
    src: "/images/rooms/triple/CTP21178.jpg",
    medium: "/images/rooms/triple/CTP21178.jpg",
    large: "/images/rooms/triple/CTP21178.jpg",
    altKey: "images.triple3",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-04",
    src: "/images/rooms/triple/CTP21373-retouched.png",
    medium: "/images/rooms/triple/CTP21373-retouched.png",
    large: "/images/rooms/triple/CTP21373-retouched.png",
    altKey: "images.triple4",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-05",
    src: "/images/rooms/triple/CTP21390.jpg",
    medium: "/images/rooms/triple/CTP21390.jpg",
    large: "/images/rooms/triple/CTP21390.jpg",
    altKey: "images.triple5",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-06",
    src: "/images/rooms/triple/CTP21395.jpg",
    medium: "/images/rooms/triple/CTP21395.jpg",
    large: "/images/rooms/triple/CTP21395.jpg",
    altKey: "images.triple6",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-07",
    src: "/images/rooms/triple/CTP21383.jpg",
    medium: "/images/rooms/triple/CTP21383.jpg",
    large: "/images/rooms/triple/CTP21383.jpg",
    altKey: "images.triple7",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-08",
    src: "/images/rooms/triple/CTP21380-retouched.png",
    medium: "/images/rooms/triple/CTP21380-retouched.png",
    large: "/images/rooms/triple/CTP21380-retouched.png",
    altKey: "images.triple8",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-09",
    src: "/images/rooms/triple/CTP21489-retouched.png",
    medium: "/images/rooms/triple/CTP21489-retouched.png",
    large: "/images/rooms/triple/CTP21489-retouched.png",
    altKey: "images.triple9",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-10",
    src: "/images/rooms/triple/CTP21457-retouched.png",
    medium: "/images/rooms/triple/CTP21457-retouched.png",
    large: "/images/rooms/triple/CTP21457-retouched.png",
    altKey: "images.triple10",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-11",
    src: "/images/rooms/triple/CTP21168-retouched.png",
    medium: "/images/rooms/triple/CTP21168-retouched.png",
    large: "/images/rooms/triple/CTP21168-retouched.png",
    altKey: "images.triple11",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-12",
    src: "/images/rooms/triple/CTP21451-retouched.png",
    medium: "/images/rooms/triple/CTP21451-retouched.png",
    large: "/images/rooms/triple/CTP21451-retouched.png",
    altKey: "images.triple12",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-13",
    src: "/images/rooms/triple/CTP21476.jpg",
    medium: "/images/rooms/triple/CTP21476.jpg",
    large: "/images/rooms/triple/CTP21476.jpg",
    altKey: "images.triple13",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-14",
    src: "/images/rooms/triple/CTP21463.jpg",
    medium: "/images/rooms/triple/CTP21463.jpg",
    large: "/images/rooms/triple/CTP21463.jpg",
    altKey: "images.triple14",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-15",
    src: "/images/rooms/triple/CTP21488-retouched.png",
    medium: "/images/rooms/triple/CTP21488-retouched.png",
    large: "/images/rooms/triple/CTP21488-retouched.png",
    altKey: "images.triple15",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-16",
    src: "/images/rooms/triple/CTP21452-retouched.png",
    medium: "/images/rooms/triple/CTP21452-retouched.png",
    large: "/images/rooms/triple/CTP21452-retouched.png",
    altKey: "images.triple16",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-17",
    src: "/images/rooms/triple/CTP21459.jpg",
    medium: "/images/rooms/triple/CTP21459.jpg",
    large: "/images/rooms/triple/CTP21459.jpg",
    altKey: "images.triple17",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-18",
    src: "/images/rooms/triple/CTP21199.jpg",
    medium: "/images/rooms/triple/CTP21199.jpg",
    large: "/images/rooms/triple/CTP21199.jpg",
    altKey: "images.triple18",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-19",
    src: "/images/rooms/triple/CTP21164-retouched.png",
    medium: "/images/rooms/triple/CTP21164-retouched.png",
    large: "/images/rooms/triple/CTP21164-retouched.png",
    altKey: "images.triple19",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-20",
    src: "/images/rooms/triple/CTP21163-retouched.png",
    medium: "/images/rooms/triple/CTP21163-retouched.png",
    large: "/images/rooms/triple/CTP21163-retouched.png",
    altKey: "images.triple20",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-21",
    src: "/images/rooms/triple/CTP21174-retouched.png",
    medium: "/images/rooms/triple/CTP21174-retouched.png",
    large: "/images/rooms/triple/CTP21174-retouched.png",
    altKey: "images.triple21",
    width: 1400,
    height: 900,
  },
  {
    id: "triple-22",
    src: "/images/rooms/triple/CTP21376-retouched.png",
    medium: "/images/rooms/triple/CTP21376-retouched.png",
    large: "/images/rooms/triple/CTP21376-retouched.png",
    altKey: "images.triple22",
    width: 1400,
    height: 900,
  },

  // APARTMENT
  {
    id: "apartment-01",
    src: "/images/rooms/apartment/CTP21217-retouched.png",
    medium: "/images/rooms/apartment/CTP21217-retouched.png",
    large: "/images/rooms/apartment/CTP21217-retouched.png",
    altKey: "images.apartment1",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-02",
    src: "/images/rooms/apartment/CTP21251.jpg",
    medium: "/images/rooms/apartment/CTP21251.jpg",
    large: "/images/rooms/apartment/CTP21251.jpg",
    altKey: "images.apartment2",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-03",
    src: "/images/rooms/apartment/CTP21244.jpg",
    medium: "/images/rooms/apartment/CTP21244.jpg",
    large: "/images/rooms/apartment/CTP21244.jpg",
    altKey: "images.apartment3",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-04",
    src: "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg",
    medium:
      "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg",
    large:
      "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg",
    altKey: "images.apartment4",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-05",
    src: "/images/rooms/apartment/CTP21267.jpg",
    medium: "/images/rooms/apartment/CTP21267.jpg",
    large: "/images/rooms/apartment/CTP21267.jpg",
    altKey: "images.apartment5",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-06",
    src: "/images/rooms/apartment/CTP21272.jpg",
    medium: "/images/rooms/apartment/CTP21272.jpg",
    large: "/images/rooms/apartment/CTP21272.jpg",
    altKey: "images.apartment6",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-07",
    src: "/images/rooms/apartment/CTP21275.jpg",
    medium: "/images/rooms/apartment/CTP21275.jpg",
    large: "/images/rooms/apartment/CTP21275.jpg",
    altKey: "images.apartment7",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-08",
    src: "/images/rooms/apartment/CTP21289.jpg",
    medium: "/images/rooms/apartment/CTP21289.jpg",
    large: "/images/rooms/apartment/CTP21289.jpg",
    altKey: "images.apartment8",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-09",
    src: "/images/rooms/apartment/CTP21288.jpg",
    medium: "/images/rooms/apartment/CTP21288.jpg",
    large: "/images/rooms/apartment/CTP21288.jpg",
    altKey: "images.apartment9",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-10",
    src: "/images/rooms/apartment/CTP21232-retouched.png",
    medium: "/images/rooms/apartment/CTP21232-retouched.png",
    large: "/images/rooms/apartment/CTP21232-retouched.png",
    altKey: "images.apartment10",
    width: 1400,
    height: 900,
  },
  {
    id: "apartment-11",
    src: "/images/rooms/apartment/CTP21229.jpg",
    medium: "/images/rooms/apartment/CTP21229.jpg",
    large: "/images/rooms/apartment/CTP21229.jpg",
    altKey: "images.apartment11",
    width: 1400,
    height: 900,
  },
];

interface GalleryProps {
  limit?: number;
}

export function Gallery({ limit }: GalleryProps) {
  const { t } = useTranslation();
  const [active, setActive] = useState<number | null>(null);

  const items = limit ? gallery.slice(0, limit) : gallery;

  const closeLightbox = () => {
    setActive(null);
  };

  const showNext = () => {
    if (active === null) return;
    setActive((active + 1) % items.length);
  };

  const showPrevious = () => {
    if (active === null) return;
    setActive((active - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (active === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, items.length]);

  const lightbox =
    active !== null
      ? createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={t("gallery.open")}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label={t("common.close")}
            >
              <Icon name="close" size={24} />
            </button>

            <button
              type="button"
              className="lightbox-prev"
              onClick={showPrevious}
              aria-label={t("common.previous")}
            >
              <Icon name="arrow" size={24} />
            </button>

            <img
              className="lightbox-image"
              src={items[active].large}
              alt={t(items[active].altKey)}
              width={items[active].width}
              height={items[active].height}
            />

            <button
              type="button"
              className="lightbox-next"
              onClick={showNext}
              aria-label={t("common.next")}
            >
              <Icon name="arrow" size={24} />
            </button>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="gallery-grid">
        {items.map((img, index) => (
          <button
            type="button"
            className="gallery-item"
            key={img.id}
            onClick={() => setActive(index)}
            aria-label={`${t("gallery.open")}: ${t(img.altKey)}`}
          >
            <OptimizedImage
              src={img.src}
              medium={img.medium}
              large={img.large}
              alt={t(img.altKey)}
              width={img.width}
              height={img.height}
              loading="lazy"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {lightbox}
    </>
  );
}
