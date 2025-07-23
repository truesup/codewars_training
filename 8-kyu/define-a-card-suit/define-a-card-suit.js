function defineSuit(card) {
  const suitSymbol = card.slice(-1);
  switch (suitSymbol) {
    case '♣':
      return 'clubs';
    case '♦':
      return 'diamonds';
    case '♥':
      return 'hearts';
    case '♠':
      return 'spades';
    default:
      return 'unknown';
  }
}