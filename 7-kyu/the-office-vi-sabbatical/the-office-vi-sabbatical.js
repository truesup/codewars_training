function sabb(s, val, happiness){
  const score = [...s.toLowerCase()]
    .filter(c => 'sabbatical'.includes(c)).length
  return score + val + happiness > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.'
}
​