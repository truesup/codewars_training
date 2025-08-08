function fuelPrice(litres, pricePerLitre) {
  const discountPerLitre = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  const finalPrice = (pricePerLitre - discountPerLitre) * litres;
  return +finalPrice.toFixed(2);
}