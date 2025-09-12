function removeRotten(bagOfFruits){
  if (!bagOfFruits || bagOfFruits.length === 0) return [];
  return bagOfFruits.map(fruit => 
    fruit.toLowerCase().startsWith("rotten") ? fruit.slice(6).toLowerCase() : fruit.toLowerCase()
  );
}
​