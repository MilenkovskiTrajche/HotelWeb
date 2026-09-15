import type { Room } from "../types";

export const rooms: Room[] = [
  {
    slug: "double-room",
    kind: "double",
    count: 4,
    capacity: "2",
    size: "XX m²",
    bed: "Double bed",
    descriptionKey: "rooms.double.description",
    features: ["bath", "air", "heating", "tv", "wifi", "fridge", "kettle"],
    images: [
      { id: "double-1", src: "/images/rooms/double/CTP21314-retouched.png", medium: "/images/rooms/double/CTP21314-retouched.png", large: "/images/rooms/double/CTP21314-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-2", src: "/images/rooms/double/CTP21329-retouched.png", medium: "/images/rooms/double/CTP21329-retouched.png", large: "/images/rooms/double/CTP21329-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-3", src: "/images/rooms/double/CTP21336.jpg", medium: "/images/rooms/double/CTP21336.jpg", large: "/images/rooms/double/CTP21336.jpg", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-4", src: "/images/rooms/double/CTP21444.jpg", medium: "/images/rooms/double/CTP21444.jpg", large: "/images/rooms/double/CTP21444.jpg", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-5", src: "/images/rooms/double/CTP21420-retouched.png", medium: "/images/rooms/double/CTP21420-retouched.png", large: "/images/rooms/double/CTP21420-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-6", src: "/images/rooms/double/CTP21421-retouched.png", medium: "/images/rooms/double/CTP21421-retouched.png", large: "/images/rooms/double/CTP21421-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-7", src: "/images/rooms/double/CTP21418-retouched.png", medium: "/images/rooms/double/CTP21418-retouched.png", large: "/images/rooms/double/CTP21418-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-8", src: "/images/rooms/double/CTP21326-retouched.png", medium: "/images/rooms/double/CTP21326-retouched.png", large: "/images/rooms/double/CTP21326-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-9", src: "/images/rooms/double/CTP21435-retouched.png", medium: "/images/rooms/double/CTP21435-retouched.png", large: "/images/rooms/double/CTP21435-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-10", src: "/images/rooms/double/CTP21431-retouched.png", medium: "/images/rooms/double/CTP21431-retouched.png", large: "/images/rooms/double/CTP21431-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-11", src: "/images/rooms/double/CTP21362-retouched.png", medium: "/images/rooms/double/CTP21362-retouched.png", large: "/images/rooms/double/CTP21362-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-12", src: "/images/rooms/double/CTP21402-retouched.png", medium: "/images/rooms/double/CTP21402-retouched.png", large: "/images/rooms/double/CTP21402-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-13", src: "/images/rooms/double/CTP21311-retouched.png", medium: "/images/rooms/double/CTP21311-retouched.png", large: "/images/rooms/double/CTP21311-retouched.png", altKey: "images.double1", width: 1200, height: 800 },
      { id: "double-14", src: "/images/rooms/double/CTP21348.jpg", medium: "/images/rooms/double/CTP21348.jpg", large: "/images/rooms/double/CTP21348.jpg", altKey: "images.double1", width: 1200, height: 800 }
    ]
  },

  {
    slug: "triple-room",
    kind: "triple",
    count: 3,
    capacity: "3",
    size: "XX m²",
    bed: "Main sleeping arrangement + additional bed",
    descriptionKey: "rooms.triple.description",
    features: ["bath", "air", "heating", "tv", "wifi", "fridge", "kettle"],
    images: [
      { id: "triple-1", src: "/images/rooms/triple/CTP21378.jpg", medium: "/images/rooms/triple/CTP21378.jpg", large: "/images/rooms/triple/CTP21378.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-2", src: "/images/rooms/triple/CTP21474-retouched.png", medium: "/images/rooms/triple/CTP21474-retouched.png", large: "/images/rooms/triple/CTP21474-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-3", src: "/images/rooms/triple/CTP21178.jpg", medium: "/images/rooms/triple/CTP21178.jpg", large: "/images/rooms/triple/CTP21178.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-4", src: "/images/rooms/triple/CTP21373-retouched.png", medium: "/images/rooms/triple/CTP21373-retouched.png", large: "/images/rooms/triple/CTP21373-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-5", src: "/images/rooms/triple/CTP21390.jpg", medium: "/images/rooms/triple/CTP21390.jpg", large: "/images/rooms/triple/CTP21390.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-6", src: "/images/rooms/triple/CTP21395.jpg", medium: "/images/rooms/triple/CTP21395.jpg", large: "/images/rooms/triple/CTP21395.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-7", src: "/images/rooms/triple/CTP21383.jpg", medium: "/images/rooms/triple/CTP21383.jpg", large: "/images/rooms/triple/CTP21383.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-8", src: "/images/rooms/triple/CTP21380-retouched.png", medium: "/images/rooms/triple/CTP21380-retouched.png", large: "/images/rooms/triple/CTP21380-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-9", src: "/images/rooms/triple/CTP21489-retouched.png", medium: "/images/rooms/triple/CTP21489-retouched.png", large: "/images/rooms/triple/CTP21489-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-10", src: "/images/rooms/triple/CTP21457-retouched.png", medium: "/images/rooms/triple/CTP21457-retouched.png", large: "/images/rooms/triple/CTP21457-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-11", src: "/images/rooms/triple/CTP21168-retouched.png", medium: "/images/rooms/triple/CTP21168-retouched.png", large: "/images/rooms/triple/CTP21168-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-12", src: "/images/rooms/triple/CTP21451-retouched.png", medium: "/images/rooms/triple/CTP21451-retouched.png", large: "/images/rooms/triple/CTP21451-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-13", src: "/images/rooms/triple/CTP21476.jpg", medium: "/images/rooms/triple/CTP21476.jpg", large: "/images/rooms/triple/CTP21476.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-14", src: "/images/rooms/triple/CTP21463.jpg", medium: "/images/rooms/triple/CTP21463.jpg", large: "/images/rooms/triple/CTP21463.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-15", src: "/images/rooms/triple/CTP21488-retouched.png", medium: "/images/rooms/triple/CTP21488-retouched.png", large: "/images/rooms/triple/CTP21488-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-16", src: "/images/rooms/triple/CTP21452-retouched.png", medium: "/images/rooms/triple/CTP21452-retouched.png", large: "/images/rooms/triple/CTP21452-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-17", src: "/images/rooms/triple/CTP21459.jpg", medium: "/images/rooms/triple/CTP21459.jpg", large: "/images/rooms/triple/CTP21459.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-18", src: "/images/rooms/triple/CTP21199.jpg", medium: "/images/rooms/triple/CTP21199.jpg", large: "/images/rooms/triple/CTP21199.jpg", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-19", src: "/images/rooms/triple/CTP21164-retouched.png", medium: "/images/rooms/triple/CTP21164-retouched.png", large: "/images/rooms/triple/CTP21164-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-20", src: "/images/rooms/triple/CTP21163-retouched.png", medium: "/images/rooms/triple/CTP21163-retouched.png", large: "/images/rooms/triple/CTP21163-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-21", src: "/images/rooms/triple/CTP21174-retouched.png", medium: "/images/rooms/triple/CTP21174-retouched.png", large: "/images/rooms/triple/CTP21174-retouched.png", altKey: "images.triple1", width: 1200, height: 800 },
      { id: "triple-22", src: "/images/rooms/triple/CTP21376-retouched.png", medium: "/images/rooms/triple/CTP21376-retouched.png", large: "/images/rooms/triple/CTP21376-retouched.png", altKey: "images.triple1", width: 1200, height: 800 }
    ]
  },

  {
    slug: "apartment",
    kind: "apartment",
    count: 2,
    capacity: "4",
    size: "XX m²",
    bed: "Main sleeping arrangement + additional bed",
    descriptionKey: "rooms.apartment.description",
    features: ["bath", "air", "heating", "tv", "wifi", "fridge", "kettle"],
    images: [
      { id: "apartment-1", src: "/images/rooms/apartment/CTP21217-retouched.png", medium: "/images/rooms/apartment/CTP21217-retouched.png", large: "/images/rooms/apartment/CTP21217-retouched.png", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-2", src: "/images/rooms/apartment/CTP21251.jpg", medium: "/images/rooms/apartment/CTP21251.jpg", large: "/images/rooms/apartment/CTP21251.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-3", src: "/images/rooms/apartment/CTP21244.jpg", medium: "/images/rooms/apartment/CTP21244.jpg", large: "/images/rooms/apartment/CTP21244.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-4", src: "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg", medium: "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg", large: "/images/rooms/apartment/AB654458-4A89-4659-97E7-5248552052B6_1_201_a.jpeg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-5", src: "/images/rooms/apartment/CTP21267.jpg", medium: "/images/rooms/apartment/CTP21267.jpg", large: "/images/rooms/apartment/CTP21267.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-6", src: "/images/rooms/apartment/CTP21272.jpg", medium: "/images/rooms/apartment/CTP21272.jpg", large: "/images/rooms/apartment/CTP21272.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-7", src: "/images/rooms/apartment/CTP21275.jpg", medium: "/images/rooms/apartment/CTP21275.jpg", large: "/images/rooms/apartment/CTP21275.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-8", src: "/images/rooms/apartment/CTP21289.jpg", medium: "/images/rooms/apartment/CTP21289.jpg", large: "/images/rooms/apartment/CTP21289.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-9", src: "/images/rooms/apartment/CTP21288.jpg", medium: "/images/rooms/apartment/CTP21288.jpg", large: "/images/rooms/apartment/CTP21288.jpg", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-10", src: "/images/rooms/apartment/CTP21232-retouched.png", medium: "/images/rooms/apartment/CTP21232-retouched.png", large: "/images/rooms/apartment/CTP21232-retouched.png", altKey: "images.apartment1", width: 1200, height: 800 },
      { id: "apartment-11", src: "/images/rooms/apartment/CTP21229.jpg", medium: "/images/rooms/apartment/CTP21229.jpg", large: "/images/rooms/apartment/CTP21229.jpg", altKey: "images.apartment1", width: 1200, height: 800 }
    ]
  }
];