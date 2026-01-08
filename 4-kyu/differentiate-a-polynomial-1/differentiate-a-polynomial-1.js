function differentiate(equation, point){
  return equation
    .replace(/-/g, "+-")
    .split("+")
    .filter(Boolean)
    .map(term => {
      if(!term.includes("x")) return 0
      let [coef, exp] = term.split("x")
      coef = coef === "" ? 1 : coef === "-" ? -1 : Number(coef)
      if(exp.startsWith("^")) exp = Number(exp.slice(1))
      else exp = 1
      return coef * exp * point**(exp - 1)
    })
    .reduce((a,b) => a+b, 0)
}
​