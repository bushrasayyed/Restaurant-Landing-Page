import Image from "next/image";
export type MenuItem = { name: string; price: number | string; image?: string };

const MOCKTAIL_IMGS = [
  "/images/ai/mocktails-1.png",
  "/images/ai/mocktails-2.png",
  "/images/mocktails/CrazyBlueOceanMojito.png",
  "/images/mocktails/GreenAppleMojito.png",
  "/images/mocktails/KiwiSpicy.png",
  "/images/ai/mocktails-3.png",
];
export const mocktails: MenuItem[] = [
  { name: "Virgin Mojito", price: 99 },
  { name: "Lychee Blue Mojito", price: 99 },
  { name: "Crazy Blue Ocean Mojito", price: 99 },
  { name: "Green Apple Mojito", price: 99 },
  { name: "Kiwi Spicy", price: 99 },
  { name: "Bubblegum (Boom Boom Boomer)", price: 99 },
].map((d, i) => ({ ...d, image: MOCKTAIL_IMGS[i % MOCKTAIL_IMGS.length] }));

const COOLER_IMGS = [
  "/images/coolers/Kaccha_Aam.png",
  "/images/coolers/Orange.png",
  "/images/coolers/Lichee.png",
  "/images/coolers/Pineapple.png",
  "/images/coolers/Mango.png",
  "images/coolers/Watermelon.png",
];
export const coolers: MenuItem[] = [
  { name: "Kaccha Aam", price: 85 },
  { name: "Orange", price: 85 },
  { name: "Lychee", price: 85 },
  { name: "Pineapple", price: 85 },
  { name: "Mango", price: 85 },
  { name: "Watermelon", price: 85 },
].map((d, i) => ({ ...d, image: COOLER_IMGS[i % COOLER_IMGS.length] }));

const DESSERT_IMGS = [
  "/images/desserts/DutchTrufflePastry.png",
  "/images/ai/desserts-2.png",
  "/images/desserts/ChocoLava_with_IceCream.png",
  "/images/desserts/Nutella_Cheesecake.png",
  "/images/ai/desserts-1.png",
  "/images/ai/desserts-3.png",
  "/images/desserts/Fruit_Fusion.png",
];
export const desserts: MenuItem[] = [
  { name: "Dutch Truffle Pastry", price: 130 },
  { name: "Chocolate Mousse", price: 120 },
  { name: "Choco Lava with Ice Cream", price: 120 },
  { name: "Nutella Cheesecake", price: 160 },
  { name: "Blueberry Cheesecake", price: 160 },
  { name: "Sizzling Choco Walnut Brownie", price: 180 },
  { name: "Fruit Fusion", price: 130 },
].map((d, i) => ({ ...d, image: DESSERT_IMGS[i % DESSERT_IMGS.length] }));

const SHAKE_IMGS = [
  "/images/milkshakes/CrazyChocolate.png",
  "/images/ai/shakes-2.png",
  "/images/milkshakes/ChocoBerryMilkshake.png",
  "/images/milkshakes/shakes.png",
  "/images/milkshakes/Nutella_shake.png",
  "/images/milkshakes/Nutella_Oreo_Milkshake.png",
  "/images/milkshakes/HazelnutMochaMilkshake.png",
];
export const chocoShakes: MenuItem[] = [
  { name: "Crazy Chocolate", price: 130 },
  { name: "Crazy Mocha Milkshake", price: 130 },
  { name: "Choco Berry Milkshake", price: 130 },
  { name: "Oreo KitKat Milkshake", price: 140 },
  { name: "Nutella Chocolate Milkshake", price: 180 },
  { name: "Nutella Oreo Milkshake", price: 180 },
  { name: "Hazelnut Mocha Milkshake", price: 190 },
].map((d, i) => ({ ...d, image: SHAKE_IMGS[i % SHAKE_IMGS.length] }));

const DRINK_IMGS = [
  "/images/ai/Bisleri.png",
  "/images/ai/cokes.png",
  "/images/ai/drinks-2.png",
  "/images/ai/drinks-3.png",
];
export const drinks: MenuItem[] = [
  { name: "Bisleri (1L)", price: 20 },
  { name: "Thums Up / Coke / Sprite / Fanta (300ml)", price: 20 },
  { name: "Lime Soda (100ml)", price: 20 },
  { name: "Rio (250ml)", price: 20 },
].map((d, i) => ({ ...d, image: DRINK_IMGS[i % DRINK_IMGS.length] }));
