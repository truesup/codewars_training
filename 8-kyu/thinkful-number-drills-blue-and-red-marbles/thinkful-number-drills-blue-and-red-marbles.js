function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const remainingBlue = blueStart - bluePulled;
  const remainingRed = redStart - redPulled;
  return remainingBlue / (remainingBlue + remainingRed);
}
​