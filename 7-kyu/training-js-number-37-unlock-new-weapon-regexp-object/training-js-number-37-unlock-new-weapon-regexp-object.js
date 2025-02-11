function countAnimals(animals, count) {
  const animalsList = animals.match(/\b\w+\b/g);
​
  const frequency = {};
​
  animalsList.forEach(animal => {
    frequency[animal] = (frequency[animal] || 0) + 1;
  });
​
  return count.map(animal => frequency[animal] || 0);
}