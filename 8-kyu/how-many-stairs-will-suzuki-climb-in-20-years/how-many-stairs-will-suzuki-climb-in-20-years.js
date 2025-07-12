function stairsIn20(s){
  const oneYearTotal = s.flat().reduce((sum, val) => sum + val, 0);
  return oneYearTotal * 20;
}