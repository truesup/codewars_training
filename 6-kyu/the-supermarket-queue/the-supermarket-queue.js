function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  
  const tills = Array(n).fill(0);
  
  for (let time of customers) {
    const nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += time;
  }
  
  return Math.max(...tills);
}