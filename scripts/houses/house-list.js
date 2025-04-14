


export const houseList = [
  { id: 1, houseType: "3-Bedroom Apartment", location: "City", rentCost: 900, purchaseCost: 65_000, taxRate: 5, image: "scripts/houses/images/three-bed-apt.jpg", sleepQuality: 5, hygieneEffect: 0 },
  { id: 2, houseType: "2-Bedroom Apartment", location: "City", rentCost: 750, purchaseCost: 55_000, taxRate: 5, image: "scripts/houses/images/two-bed-apt.jpg", sleepQuality: 5, hygieneEffect: 0 },
  { id: 3, houseType: "Studio Apartment", location: "City", rentCost: 500, purchaseCost: 40_000, taxRate: 5, image: "scripts/houses/images/studio-apt.jpg", sleepQuality: 4, hygieneEffect: 0 },
  { id: 4, houseType: "Luxury Penthouse", location: "Luxury Estate", rentCost: 9_000, purchaseCost: 3_000_000, taxRate: 25, image: "scripts/houses/images/lux-penthouse.jpg", sleepQuality: 9, hygieneEffect: 2 },
  { id: 5, houseType: "1-Bedroom Cottage", location: "City", rentCost: 550, purchaseCost: 40_000, taxRate: 5, image: "scripts/houses/images/studio-apart.jpg", sleepQuality: 4, hygieneEffect: 0 },
  { id: 6, houseType: "Family Bungalow", location: "Village", rentCost: 700, purchaseCost: 100_000, taxRate: 10, image: "scripts/houses/images/fam-bungalow.jpg", sleepQuality: 6, hygieneEffect: 1 },
  { id: 7, houseType: "4-Bedroom Detached House", location: "City", rentCost: 2_500, purchaseCost: 300_000, taxRate: 15, image: "scripts/houses/images/detached-houses.jpg", sleepQuality: 7, hygieneEffect: 1 },
  { id: 8, houseType: "Loft Apartment", location: "City", rentCost: 1_000, purchaseCost: 85_000, taxRate: 8, image: "scripts/houses/images/loft-apt.jpg", sleepQuality: 5, hygieneEffect: 0 },
  { id: 9, houseType: "2-Bedroom Condo", location: "Luxury Estate", rentCost: 2_000, purchaseCost: 150_000, taxRate: 15, image: "scripts/houses/images/condo.jpg", sleepQuality: 6, hygieneEffect: 1 },
  { id: 10, houseType: "Studio Cottage", location: "Village", rentCost: 120, purchaseCost: 7_500, taxRate: 2, image: "scripts/houses/images/cottage.jpg", sleepQuality: 3, hygieneEffect: -1 },
  { id: 11, houseType: "1-Bedroom Log Cabin", location: "Village", rentCost: 200, purchaseCost: 20_000, taxRate: 3, image: "scripts/houses/images/log-cabin.jpg", sleepQuality: 4, hygieneEffect: -1 },
  { id: 12, houseType: "2-Bedroom Farmhouse", location: "Village", rentCost: 300, purchaseCost: 30_000, taxRate: 4, image: "scripts/houses/images/farm-house.jpg", sleepQuality: 3, hygieneEffect: -1 },
  { id: 13, houseType: "3-Bedroom Villa", location: "City", rentCost: 3_200, purchaseCost: 400_000, taxRate: 20, image: "scripts/houses/images/villa.jpg", sleepQuality: 8, hygieneEffect: 2 },
  { id: 14, houseType: "Duplex", location: "Luxury Estate", rentCost: 2_000, purchaseCost: 180_000, taxRate: 12, image: "scripts/houses/images/duplex.jpg", sleepQuality: 7, hygieneEffect: 1 },
  { id: 15, houseType: "Modern Townhouse", location: "Village", rentCost: 1_000, purchaseCost: 120_000, taxRate: 10, image: "scripts/houses/images/town-house.jpg", sleepQuality: 6, hygieneEffect: 1 },
  { id: 16, houseType: "Eco-Friendly House", location: "City", rentCost: 2_200, purchaseCost: 250_000, taxRate: 18, image: "scripts/houses/images/eco-house.jpg", sleepQuality: 7, hygieneEffect: 1 },
  { id: 17, houseType: "3-Bedroom Ranch House", location: "City", rentCost: 1_300, purchaseCost: 110_000, taxRate: 8, image: "scripts/houses/images/eanch-house.jpg", sleepQuality: 4, hygieneEffect: 0 },
  { id: 18, houseType: "1-Bedroom Apartment", location: "City", rentCost: 450, purchaseCost: 28_000, taxRate: 4, image: "scripts/houses/images/one-bedroom-apt.jpg", sleepQuality: 4, hygieneEffect: 0 },
  { id: 19, houseType: "Mansion", location: "Luxury Estate", rentCost: 20_000, purchaseCost: 12_000_000, taxRate: 30, image: "scripts/houses/images/mansion.jpg", sleepQuality: 10, hygieneEffect: 3 },
  { id: 20, houseType: "2-Bedroom Traditional House", location: "Village", rentCost: 250, purchaseCost: 20_000, taxRate: 3, image: "scripts/houses/images/trad-house.jpg", sleepQuality: 4, hygieneEffect: -1 },
  { id: 21, houseType: "Mud Hut", location: "Village", rentCost: 15, purchaseCost: 3_000, taxRate: 1, image: "scripts/houses/images/mud-house.jpg", sleepQuality: 1, hygieneEffect: -2 },
  { id: 22, houseType: "1-Bedroom Bungalow", location: "Village", rentCost: 100, purchaseCost: 10_000, taxRate: 2, image: "scripts/houses/images/bungalow-village.jpg", sleepQuality: 4, hygieneEffect: 0 }
];


// Utility: Random percentage change between given range
function getRandomPercentage(min = -2, max = 5) {
  return (Math.random() * (max - min) + min) / 100;
}

// Run once per in-game month (every 720 in-game hours)
export function updateHousingMarketMonthly() {
  houseList.forEach(house => {
    // Apply market fluctuation
    const priceChange = getRandomPercentage(-3, 3);   // -3% to +3%
    const rentChange = getRandomPercentage(-2, 2);    // -2% to +2%

    // Update purchase cost
    house.purchaseCost = Math.max(
      Math.round(house.purchaseCost * (1 + priceChange)),
      5000 // minimum purchase floor
    );

    // Update rent cost
    house.rentCost = Math.max(
      Math.round(house.rentCost * (1 + rentChange)),
      10 // minimum rent floor
    );
  });

  console.log("🏠 Housing market updated for the new month.");
}
