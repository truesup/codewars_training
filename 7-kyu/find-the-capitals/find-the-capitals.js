function capital(capitals){
  return capitals.map(obj => {
    const place = obj.state || obj.country;
    return `The capital of ${place} is ${obj.capital}`;
  });
}
​