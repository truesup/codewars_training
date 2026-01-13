solution = (M1, M2, m1, m2, V, T) => {
  const R = 0.082
  const T_K = T + 273.15
  return ((m1 / M1) + (m2 / M2)) * R * T_K / V
}
​