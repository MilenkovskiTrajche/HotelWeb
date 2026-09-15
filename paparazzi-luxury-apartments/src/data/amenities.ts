export const amenityGroups = [
  {
    key: "room",
    items: [
      ["air", "amenities.air"],
      ["heating", "amenities.heating"],
      ["tv", "amenities.tv"],
      ["wifi", "amenities.wifi"],
      ["fridge", "amenities.fridge"],
      ["kettle", "amenities.kettle"],
      ["heating", "amenities.underfloor"]
    ]
  },
  {
    key: "bathroom",
    items: [
      ["bath", "amenities.privateBathroom"],
      ["bath", "amenities.shower"],
      ["check", "amenities.shampoo"],
      ["check", "amenities.soap"],
      ["check", "amenities.towels"]
    ]
  },
  {
    key: "property",
    items: [
      ["key", "amenities.selfCheckIn"],
      ["key", "amenities.doorPin"],
      ["key", "amenities.keyDrop"],
      ["pin", "amenities.streetParking"],
      ["check", "amenities.courtyard"],
      ["camera", "amenities.cameras"],
      ["check", "amenities.reception"]
    ]
  }
] as const;