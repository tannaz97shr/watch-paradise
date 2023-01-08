import { IWatch } from "./models/general";

const DUMMY_WATCHS: IWatch[] = [
  {
    id: "w1",
    title: "Ice Glitter 34mm Gold Glitter Dial Ladies",
    description:
      "Black silicone case with a black silicone strap. Fixed black silicone bezel with a gold-tone ring. Gold glitter dial with gold-tone hands and index hour markers. Dial Type: Analog. Quartz movement. Scratch resistant mineral crystal. Pull / push crown. Solid case back. Round case shape. Case size: 34 mm. Case thickness: 9 mm. Band width: 17 mm. Tang clasp. Water resistant at 100 meters / 330 feet. Functions: hour, minute, second. Casual watch style. Ice-Watch Ice Glitter 34mm Gold Glitter Dial Ladies Watch 001348.",
    price: 40,
    gender: "female",
    isFeatured: false,
    productCode: "001348",
    image: "/images/ice.jpg",
    brand: "Glitter",
  },
  {
    id: "w2",
    title: "Seiko Prospex SEA Solar Diver's",
    description:
      "Seiko caliber V157, Solar Diver's 200m, power reserve up to 10 months, unidirectional rotating bezel in stainless steel with aluminium",
    price: 549,
    gender: "male",
    isFeatured: true,
    productCode: "SNE591P1",
    image: "/images/seiko.jpg",
    brand: "Seiko",
  },
  {
    id: "w3",
    title: "Casio Watch For Women",
    description:
      "If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website.",
    price: 200,
    gender: "female",
    isFeatured: true,
    productCode: "LTP-1308D-1A2VDF",
    image: "/images/casio.jpg",
    brand: "Casio",
  },
  {
    id: "w4",
    title: "Wristwatch Citizen Mr.",
    description:
      "CA7063-12A Citizen Watch Man Movement Solar Display Analogue Features Chronograph Water Resistance 10 ATM water resistant Case Material Yellow Gold Plated Steel Case Color Rose Gold Dial Color Beige Strap Material Leather Strap Color Brown Case Width (mm) 42 Case Depth (mm) 12 Weight (Gr) 63 Gender Mr",
    price: 178,
    gender: "male",
    isFeatured: true,
    productCode: "CA7063-12A",
    image: "/images/citizen.jpg",
    brand: "Citizen",
  },
  {
    id: "w5",
    title: "Ice Glitter 34mm Gold Glitter Dial Ladies",
    description:
      "Black silicone case with a black silicone strap. Fixed black silicone bezel with a gold-tone ring. Gold glitter dial with gold-tone hands and index hour markers. Dial Type: Analog. Quartz movement. Scratch resistant mineral crystal. Pull / push crown. Solid case back. Round case shape. Case size: 34 mm. Case thickness: 9 mm. Band width: 17 mm. Tang clasp. Water resistant at 100 meters / 330 feet. Functions: hour, minute, second. Casual watch style. Ice-Watch Ice Glitter 34mm Gold Glitter Dial Ladies Watch 001348.",
    price: 40,
    gender: "female",
    isFeatured: false,
    productCode: "001348",
    image: "/images/ice.jpg",
    brand: "Glitter",
  },
  {
    id: "w6",
    title: "Seiko Prospex SEA Solar Diver's",
    description:
      "Seiko caliber V157, Solar Diver's 200m, power reserve up to 10 months, unidirectional rotating bezel in stainless steel with aluminium",
    price: 549,
    gender: "male",
    isFeatured: false,
    productCode: "SNE591P1",
    image: "/images/seiko.jpg",
    brand: "Seiko",
  },
  {
    id: "w7",
    title: "Casio Watch For Women",
    description:
      "If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website.",
    price: 200,
    gender: "female",
    isFeatured: false,
    productCode: "LTP-1308D-1A2VDF",
    image: "/images/casio.jpg",
    brand: "Casio",
  },
  {
    id: "w8",
    title: "Wristwatch Citizen Mr.",
    description:
      "CA7063-12A Citizen Watch Man Movement Solar Display Analogue Features Chronograph Water Resistance 10 ATM water resistant Case Material Yellow Gold Plated Steel Case Color Rose Gold Dial Color Beige Strap Material Leather Strap Color Brown Case Width (mm) 42 Case Depth (mm) 12 Weight (Gr) 63 Gender Mr",
    price: 178,
    gender: "male",
    isFeatured: false,
    productCode: "CA7063-12A",
    image: "/images/citizen.jpg",
    brand: "Citizen",
  },
];

export const getFeaturedWatches = (): IWatch[] => {
  return DUMMY_WATCHS.filter((watch) => watch.isFeatured);
};

export const getWatchById = (
  id: string | string[] | undefined
): IWatch | undefined => {
  return DUMMY_WATCHS.find((watch) => watch.id === id);
};

export const getAllWatches = (): IWatch[] => DUMMY_WATCHS;

export const extractBrands = (): string[] => {
  let brandsArray: string[] = [];
  DUMMY_WATCHS.forEach((watch) => {
    if (!brandsArray.includes(watch.brand)) brandsArray.push(watch.brand);
  });
  return brandsArray;
};
