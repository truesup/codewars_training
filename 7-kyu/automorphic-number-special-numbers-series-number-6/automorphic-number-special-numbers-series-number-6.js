function automorphic(n){
  const squared = n * n;
  return squared.toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}