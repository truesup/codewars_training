function discoverOriginalPrice(discountedPrice, salePercentage) {
  const original = discountedPrice / (1 - salePercentage / 100);
  return Number(original.toFixed(2));
}
​