function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    if (dead.every(victim => suspectInfo[suspect].includes(victim))) {
      return suspect;
    }
  }
}
​