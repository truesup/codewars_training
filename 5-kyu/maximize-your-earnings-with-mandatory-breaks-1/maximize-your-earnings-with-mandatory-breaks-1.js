function maximizeEarnings(earnings, k) {
  const n = earnings.length;
  if (n === 0) return 0;
  
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(-Infinity));
  
  dp[0][0] = 0;     
  dp[0][1] = earnings[0];
  
  for (let i = 1; i < n; i++) {
    let bestPrevious = -Infinity;
    for (let j = 0; j <= k; j++) {
      bestPrevious = Math.max(bestPrevious, dp[i - 1][j]);
    }
    dp[i][0] = bestPrevious;
​
    for (let j = 0; j < k; j++) {
      if (dp[i - 1][j] > -Infinity) {
        dp[i][j + 1] = dp[i - 1][j] + earnings[i];
      }
    }
  }
  
  let result = -Infinity;
  for (let j = 0; j <= k; j++) {
    result = Math.max(result, dp[n - 1][j]);
  }
  return result;
}