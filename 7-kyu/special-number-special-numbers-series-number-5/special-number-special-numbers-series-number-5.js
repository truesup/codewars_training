function specialNumber(n){
  return String(n).split('').every(d => d <= '5') 
    ? "Special!!" 
    : "NOT!!";
}
​