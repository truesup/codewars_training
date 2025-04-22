function declareWinner(fighter1, fighter2, firstAttacker) {
  const rounds1 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  const rounds2 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  if (rounds1 < rounds2) return fighter1.name
  if (rounds2 < rounds1) return fighter2.name
  return firstAttacker
}