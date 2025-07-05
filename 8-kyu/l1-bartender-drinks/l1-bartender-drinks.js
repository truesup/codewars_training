function getDrinkByProfession(param) {
  const map = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  };
​
  const key = param.toLowerCase();
  return map[key] || "Beer";
}